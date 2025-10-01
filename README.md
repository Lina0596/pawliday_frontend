# 🐾 Pawliday Frontend

The **Pawliday Frontend** is the client-side application for the Pawliday project — a web app that helps dog owners manage their pets and organize vacation care.  
Built with **React (Vite)**, it provides a modern and responsive user interface and integrates with the Pawliday Flask backend.

---

## 🚀 Features

- ⚡ **Modern UI:** Fast, responsive frontend built with React + Vite
- 📋 **Forms:** Dog management using React Hook Form
- 📷 **Image Upload:** Integration with [imagekit.io](https://imagekit.io/) for storing dog images
- 🔑 **Authentication Support:** Works with Pawliday backend for login & registration
- 🌐 **API Integration:** Communicates with the Flask backend via Axios

---

## 📚 Table of Contents

1. [About the Project](#-about-the-project)
2. [Tech Stack](#-tech-stack)
3. [Getting Started](#-getting-started)
4. [Project Structure](#-project-structure)
5. [Environment Variables](#-environment-variables)
6. [Available Scripts](#-available-scripts)
7. [Contributing](#-contributing)
8. [License](#-license)

---

## 💡 About the Project

The **Pawliday Frontend** is responsible for rendering the user interface and handling:

- User interactions like registration, login, and dog management
- Communication with the Flask API
- Image uploads using the imagekit.io SDK

This repository does **not** include the backend — it must be running separately for the app to function.

---

## 🛠 Tech Stack

- **Framework:** [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Forms:** [React Hook Form](https://react-hook-form.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Image Uploads:** [imagekit.io](https://imagekit.io/)
- **Styling:** [tailwindcss](https://tailwindcss.com/)

---

## ⚙ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A running instance of the pawliday backend (https://github.com/Lina0596/pawliday_backend)

### Installation

Clone the repository and install dependencies:

# Clone this repository

git clone https://github.com/Lina0596/pawliday_frontend.git
cd pawliday_frontend

# Install dependencies

npm install

## Running the App

npm run dev

## Project Structure

pawliday_frontend/
├── public/ # Static assets
├── src/ # Application source code
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── hooks/ # Custom hooks (e.g., form handling)
│ ├── services/ # API calls via Axios
│ └── main.jsx # Application entry point
├── .env.example # Example environment variables
├── package.json
└── vite.config.js
