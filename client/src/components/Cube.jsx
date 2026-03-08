import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// Generate a dotted grille texture (like the speaker vents on Resend)
const generateDotsTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');

    context.fillStyle = '#09090b';
    context.fillRect(0, 0, 256, 256);

    context.fillStyle = 'rgba(255, 255, 255, 0.08)';
    for (let x = 8; x < 256; x += 16) {
        for (let y = 8; y < 256; y += 16) {
            context.beginPath();
            context.arc(x, y, 3, 0, Math.PI * 2);
            context.fill();
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    // Needed to keep sharp circles
    texture.magFilter = THREE.NearestFilter;
    return texture;
};

// Generate a striped rib texture
const generateLinesTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');

    context.fillStyle = '#09090b';
    context.fillRect(0, 0, 256, 256);

    context.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let y = 0; y < 256; y += 16) {
        context.fillRect(0, y, 256, 8);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    return texture;
};

// Individual Mini Cube Component (handles hover independently)
const MiniCube = React.forwardRef(({ material }, ref) => {
    const innerRef = useRef(null);
    const [hovered, setHover] = useState(false);
    const targetScaleVector = useMemo(() => new THREE.Vector3(1, 1, 1), []);

    // Merge internal and external refs
    const setRefs = (e) => {
        innerRef.current = e;
        if (typeof ref === 'function') ref(e);
        else if (ref) ref.current = e;
    };

    useFrame((state, delta) => {
        const scale = hovered ? 1.08 : 1;
        targetScaleVector.set(scale, scale, scale);

        if (innerRef.current) {
            innerRef.current.scale.lerp(targetScaleVector, 8 * delta);
        }

        material.emissiveIntensity = THREE.MathUtils.lerp(
            material.emissiveIntensity,
            hovered ? 0.4 : 0.0,
            8 * delta
        );
    });

    return (
        <RoundedBox
            ref={setRefs}
            args={[1, 1, 1]}
            radius={0.08}
            smoothness={4}
            material={material}
            onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer'; }}
            onPointerOut={(e) => { e.stopPropagation(); setHover(false); document.body.style.cursor = 'grab'; }}
        />
    );
});
MiniCube.displayName = 'MiniCube';

// Main Rubik's Cube Logic
const Cube = () => {
    const groupRef = useRef();
    const meshRefs = useRef([]);
    const spacing = 1.02;

    // Generate 27 distinct materials so they can glow independently and have varied textures
    const materials = useMemo(() => {
        const dotsTex = generateDotsTexture();
        const linesTex = generateLinesTexture();

        const baseProps = {
            color: '#09090b',
            metalness: 0.8,
            roughness: 0.2,
            clearcoat: 1.0,           // Glassy reflectiveness over the textures
            clearcoatRoughness: 0.1,
            envMapIntensity: 2.5,
            emissive: '#ffffff',
            emissiveIntensity: 0,
        };

        const smoothMat = new THREE.MeshPhysicalMaterial({ ...baseProps, roughness: 0.1 });
        const dotsMat = new THREE.MeshPhysicalMaterial({ ...baseProps, map: dotsTex, bumpMap: dotsTex, bumpScale: 0.02 });
        const linesMat = new THREE.MeshPhysicalMaterial({ ...baseProps, map: linesTex, bumpMap: linesTex, bumpScale: 0.02 });

        const matTypes = [smoothMat, dotsMat, linesMat];

        return Array.from({ length: 27 }).map(() => {
            // Apply varied textures to different blocks
            const type = matTypes[Math.floor(Math.random() * matTypes.length)];
            return type.clone();
        });
    }, []);

    // Initialize the logical state of all 27 pieces
    const cubelets = useRef([...Array(27)].map((_, i) => {
        const x = (i % 3) - 1;
        const y = Math.floor((i / 3) % 3) - 1;
        const z = Math.floor(i / 9) - 1;
        return {
            logicalPos: new THREE.Vector3(x, y, z),
            logicalRot: new THREE.Quaternion(),
        };
    }));

    const activeMove = useRef({ active: false });

    // Instantiates a 90-degree slice rotation
    const triggerMove = () => {
        if (activeMove.current.active) return;

        const axes = ['x', 'y', 'z'];
        const axisName = axes[Math.floor(Math.random() * 3)];
        const slice = Math.floor(Math.random() * 3) - 1;
        const dir = Math.random() > 0.5 ? 1 : -1;

        const cubesInSlice = [];
        // Map abstract logical grid to current slice
        cubelets.current.forEach((c, i) => {
            if (Math.round(c.logicalPos[axisName]) === slice) {
                cubesInSlice.push(i);
            }
        });

        activeMove.current = {
            active: true,
            axisName,
            slice,
            dir,
            angle: 0,
            targetAngle: Math.PI / 2,
            cubes: cubesInSlice
        };
    };

    useFrame((state, delta) => {
        if (!cubelets.current.length) return;

        // --- 1. Slice Animation Logic ---
        if (activeMove.current.active) {
            const move = activeMove.current;
            const safeDelta = Math.min(delta, 0.1); // Prevent huge jumps
            const step = 6.0 * safeDelta; // Rotation speed (sped up from 2.5)
            move.angle += step;

            let finished = false;
            if (move.angle >= move.targetAngle) {
                move.angle = move.targetAngle;
                finished = true;
            }

            const axisVector = new THREE.Vector3();
            axisVector[move.axisName] = 1;
            const rotQuat = new THREE.Quaternion().setFromAxisAngle(axisVector, move.dir * move.angle);

            // Update all mesh transforms
            cubelets.current.forEach((c, i) => {
                const mesh = meshRefs.current[i];
                if (!mesh) return;

                if (move.cubes.includes(i)) {
                    // It is part of the actively rotating slice
                    const pos = c.logicalPos.clone().applyQuaternion(rotQuat);
                    mesh.position.copy(pos).multiplyScalar(spacing);
                    mesh.quaternion.copy(rotQuat).multiply(c.logicalRot); // Apply global arc rotation over local rotation
                } else {
                    // It is static
                    mesh.position.copy(c.logicalPos).multiplyScalar(spacing);
                    mesh.quaternion.copy(c.logicalRot);
                }
            });

            if (finished) {
                // Permanently embed the 90 degree rotation into their logical states
                const finalQuat = new THREE.Quaternion().setFromAxisAngle(axisVector, move.dir * move.targetAngle);

                move.cubes.forEach(i => {
                    const c = cubelets.current[i];
                    c.logicalPos.applyQuaternion(finalQuat);
                    c.logicalPos.x = Math.round(c.logicalPos.x); // Eliminate floating point drift
                    c.logicalPos.y = Math.round(c.logicalPos.y);
                    c.logicalPos.z = Math.round(c.logicalPos.z);

                    c.logicalRot.premultiply(finalQuat);

                    // Final snap map for precision
                    const mesh = meshRefs.current[i];
                    if (mesh) {
                        mesh.position.copy(c.logicalPos).multiplyScalar(spacing);
                        mesh.quaternion.copy(c.logicalRot);
                    }
                });
                move.active = false;
            }
        } else {
            // No active move: Ensure meshes are mapped to logcial grids
            cubelets.current.forEach((c, i) => {
                const mesh = meshRefs.current[i];
                if (mesh) {
                    mesh.position.copy(c.logicalPos).multiplyScalar(spacing);
                    mesh.quaternion.copy(c.logicalRot);
                }
            });

            // Randomly start a move (roughly every 1 second)
            if (Math.random() < 0.03) {
                triggerMove();
            }
        }

        // --- 2. Global Parallax & Tumble tracking ---
        const time = state.clock.getElapsedTime();
        const targetX = (state.pointer.y * Math.PI) / 4;
        const targetY = (state.pointer.x * Math.PI) / 4;

        if (groupRef.current) {
            // Smoothly track mouse + gentle sine wave floating
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                targetX + Math.sin(time * 0.5) * 0.2,
                2 * delta
            );
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                targetY + time * 0.4,
                2 * delta
            );
            groupRef.current.position.y = Math.sin(time * 2.0) * 0.15;
            groupRef.current.rotation.z = THREE.MathUtils.lerp(
                groupRef.current.rotation.z,
                -state.pointer.x * 0.15,
                2 * delta
            );
        }
    });

    return (
        <group ref={groupRef} dispose={null}>
            {materials.map((mat, i) => (
                <MiniCube
                    key={i}
                    material={mat}
                    ref={(el) => (meshRefs.current[i] = el)}
                />
            ))}
        </group>
    );
};

export default Cube;
