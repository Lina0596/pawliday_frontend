# 🐾 pawliday frontend

The **pawliday frontend** is the client-side application for the pawliday project — a web app and efficient digital organization tool for dog care services based on the individual characters and needs of the animals. As a dog sitter you can manage all important data about the dogs and the owners in one place.  
Built with **React (Vite)**, it provides a modern and responsive user interface and integrates with the pawliday Flask backend.

---

## 🚀 Features

- ⚡ **Modern UI:** Fast, responsive frontend built with React + Vite
- 📋 **Forms:** Dog management using React Hook Form (add/update/delete owners, dogs and user profile)
- 📷 **Image Upload:** Integration with [imagekit.io](https://imagekit.io/) for storing dog images
- 🔑 **Authentication Support:** Works with pawliday backend for login, logout & registration
- 🌐 **API Integration:** Communicates with the Flask backend via Axios

---

## 📚 Table of Contents

1. [About the Project](#-about-the-project)
2. [Tech Stack](#-tech-stack)
3. [Getting Started](#-getting-started)

---

## 💡 About the Project

The **Pawliday Frontend** is responsible for rendering the user interface and handling:

- User interactions like registration, login, owner and dog management
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

### Clone this repository

git clone https://github.com/Lina0596/pawliday_frontend.git
cd pawliday_frontend

### Install dependencies

npm install

### 🔑 Environment Variables

Create a .env file in the project root with your keys:
VITE_API_BASE_URL=http://localhost:5000/api
VITE_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key

### Running the App

npm run dev
