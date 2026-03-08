# Ritik Kumar - Full Stack Developer Portfolio

A next-generation, responsive, and animated developer portfolio built with React (Vite), Tailwind CSS, Framer Motion, and Node.js + Express.

## Features Let The Design Speak
- 🎨 **Glassmorphism & Rich UI** with smooth scrolling and animations.
- 🌙 **Dark/Light Mode Toggle**.
- 💫 **Framer Motion Animations** across all sections.
- ✨ **3D Interactive Cards** for projects using `react-tilt`.
- 📊 **Dynamic GitHub Stats Component**.
- ✉️ **Working Contact Form** handled securely using Node.js & Nodemailer.
- 📱 **Fully Responsive** for Mobile, Tablet, laptop, and Desktop.

## Tech Stack
**Frontend:** React (Vite), Tailwind CSS, Framer Motion, React Icons, Axios, React Router.
**Backend:** Node.js, Express.js, Nodemailer, Helmet, CORS.

## Project Architecture

```
portfolio/
├── client/          (React Frontend)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.jsx
│       └── main.jsx
├── server/          (Node.js Backend)
│   ├── controllers/
│   ├── routes/
│   └── server.js
└── package.json     (Root Config to run both concurrently)
```

## Environment Variables

In `server/.env`, configure your Nodemailer credentials:
```
PORT=5001
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

## Local Development (One Command Execution)

The project is structured to easily start both frontend and backend synchronously using `concurrently`.

1. Install Dependencies for root, client, and server:
```bash
npm run install-all
```
*or manually run `npm install` in each directory.*

2. Run both the React Application and Node.js API server:
```bash
npm run dev
```

## Deployment Guide
- **Frontend (Vercel)**: Connect your Github repo to Vercel. Set the Root Directory as `client`. Build command is `npm run build` and out dir is `dist`.
- **Backend (Render)**: Deploy the `server` directory as a Web Service on Render using Docker or Native Node.js deployment. Ensure you add `EMAIL_USER` and `EMAIL_PASS` in the Environment Variables section.
- Change the frontend API endpoint (`Contact.jsx`) to point to the production backend URL instead of `localhost`.
