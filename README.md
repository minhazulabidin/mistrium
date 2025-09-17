# Mistrium ['https://mis-trium.netlify.app/']

Mistrium is a modern, responsive web application designed as an e-commerce or product showcase site, specializing in furniture or home decor. It provides an aesthetically pleasing and user-friendly interface to display various product categories, collections, news, and client testimonials. Built with a focus on modularity and performance, Mistrium offers a seamless browsing experience across devices.

## Features

*   **Modular Component Architecture**: Developed with a component-based structure using React, ensuring maintainability and reusability.
*   **Responsive Design**: Implements a fully responsive layout using Tailwind CSS, adapting flawlessly to various screen sizes and devices.
*   **Dynamic Content Display**: Leverages React for dynamic rendering and interactive UI elements.
*   **Image Carousels/Sliders**: Features engaging image carousels and sliders powered by Swiper for banners and product galleries.
*   **Dedicated Content Sections**: Includes specific sections for product displays, curated collections, and up-to-date news articles.
*   **Client Testimonials**: Showcases trusted client testimonials to build credibility and trust.
*   **Fast Development & Build**: Utilizes Vite for an exceptionally fast development server and optimized build process.

## Tech Stack

Mistrium is built using the following technologies:

*   **Languages**: JavaScript, HTML, CSS
*   **Frontend Framework**: React
*   **Styling**: Tailwind CSS
*   **Build Tool**: Vite
*   **UI Components**: Swiper (for carousels), React Icons

### Dependencies

The project relies on the following key dependencies:

*   `@tailwindcss/vite`: Tailwind CSS integration with Vite.
*   `react`: The core React library.
*   `react-dom`: React package for working with the DOM.
*   `react-icons`: A collection of popular SVG icon libraries.
*   `swiper`: Modern touch slider.
*   `tailwindcss`: A utility-first CSS framework.


## Project Structure

The project follows a clear and organized structure:

```
mistrium/
├── public/                     # Publicly accessible static assets (logo, favicon)
│   ├── fav.png
│   └── Logo.png
├── src/                        # Main application source code
│   ├── assets/                 # Static images and media files
│   │   ├── banner.png
│   │   ├── chair.png
│   │   ├── ... (other images)
│   ├── Components/             # Reusable React components
│   │   ├── Pages/              # Page-specific components
│   │   │   └── Home/           # Components for the Home page
│   │   │       ├── Banner.jsx
│   │   │       ├── Collection.jsx
│   │   │       ├── Home.jsx
│   │   │       ├── News.jsx
│   │   │       ├── Products.jsx
│   │   │       └── TrustedClint.jsx
│   │   └── Utilities/          # Generic, highly reusable UI components
│   │       ├── Card.jsx
│   │       ├── Carousel.jsx
│   │       ├── Container.jsx
│   │       ├── Flex.jsx
│   │       ├── Footer.jsx
│   │       └── Header.jsx
│   ├── App.jsx                 # Root component of the application
│   ├── index.css               # Global CSS styles (Tailwind base styles)
│   └── main.jsx                # Entry point for React application
├── .eslint.config.js           # ESLint configuration
├── index.html                  # Main HTML file
├── package.json                # Project metadata and dependencies
├── package-lock.json           # npm dependency lock file
├── vite.config.js              # Vite configuration file
└── README.md                   # This README file
```

