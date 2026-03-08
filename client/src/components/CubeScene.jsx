import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import Cube from './Cube';

const CubeScene = () => {
    return (
        <div className="w-full h-[500px] lg:h-[700px] cursor-grab active:cursor-grabbing pb-12 relative flex items-center justify-center">
            <Canvas
                camera={{ position: [6.5, 5, 8], fov: 35 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                dpr={[1, 2]} // Optimize for high pixel density screens
                style={{ width: '100%', height: '100%' }}
            >
                {/* Cinematic Lighting Setup */}
                <ambientLight intensity={0.2} /> {/* Very dark ambient light */}
                <directionalLight
                    position={[15, 15, 10]}
                    intensity={2}
                    castShadow
                />

                {/* Subtle cool rim light for the dark edges */}
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#a1a1aa" />
                <pointLight position={[10, -10, 10]} intensity={0.5} color="#ffffff" />

                <Suspense fallback={null}>
                    {/* Darker studio reflections to make the glossy physical material pop without turning gray */}
                    <Environment preset="studio" />

                    {/* Render the actual cube structure */}
                    <Cube />

                    {/* Soft interactive shadow directly below the cube */}
                    <ContactShadows
                        position={[0, -2.5, 0]}
                        opacity={0.8}
                        scale={12}
                        blur={2.5}
                        far={5}
                        color="#000000"
                    />
                </Suspense>

                {/* Orbit Controls to allow the user to drag and rotate the cube */}
                <OrbitControls
                    enableZoom={false} // Disable scrolling zoom to not interfere with page scroll
                    enablePan={false}
                    autoRotate={false} // Disabled because Cube.jsx now handles its own idle rotation & parallax 
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    );
};

export default CubeScene;
