# Geopacks Website

A modern, high-performance single-page application for **Geopacks** (PET Bottles, Jars & Caps Manufacturer), built with React, Tailwind CSS, and GSAP.

## 🚀 Key Features

*   **Modern Design**: Styled with a teal (#388786) and white palette inspired by the "Renol" template.
*   **GSAP Animations**:
    *   Hero section with staggered text reveals.
    *   Scroll-triggered fade-ins and slide-ups.
    *   Interactive hover effects on product cards.
*   **Fully Responsive**: Mobile-first design with a custom hamburger menu.
*   **Core Sections**:
    *   **Hero**: Impactful landing with parallax effects.
    *   **About**: Company mission and values.
    *   **Services**: Product showcase (Bottles, Jars, Caps).
    *   **Process**: Visual workflow steps.
    *   **Contact**: Google Maps integration and functional contact form.
*   **Integrations**:
    *   Floating WhatsApp button for direct communication.
    *   Google Maps Embed API.

## 🛠️ Setup & Installation

### Prerequisites
*   Node.js (v18 or higher recommended)

### Installation
1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd geopacks
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Development
To start the development server:
```bash
npm start
# OR
npm run dev
```
Visit `http://localhost:5173` to view the app.

### Production Build
To create a production-ready build:
```bash
npm run build
```
The output will be generated in the `dist/` directory, ready for deployment to Netlify, Vercel, or any static host.

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Services, Process, Contact
│   └── ui/           # Reusable UI elements (Buttons, Titles)
├── assets/           # Images and static resources
└── index.css         # Global styles & Tailwind directives
```

## 🎨 Tech Stack

*   **Framework**: React (Vite)
*   **Styling**: Tailwind CSS v3
*   **Animations**: GSAP (GreenSock Animation Platform)
*   **Icons**: Lucide React
