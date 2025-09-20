# [Mistrium](https://mis-trium.netlify.app/)


Mistrium is a modern, responsive web application designed as an e-commerce storefront or product showcase. It is ideally suited for a furniture or interior design business, aiming to elegantly display product collections, highlight new items, share industry news, and build trust with client showcases. Built with React and Vite, it leverages Tailwind CSS and DaisyUI for a sleek, component-based user interface.

## ✨ Features

*   **Dynamic Product Display**: Showcase products and collections with categorization.
*   **Interactive Hero Sections**: Engaging banner and hero areas to capture user attention.
*   **Dedicated News/Blog**: A section for sharing updates, articles, or news.
*   **Client Trust Indicators**: Features a scrolling client logos section using `react-fast-marquee` to build credibility.
*   **Reusable UI Components**: A robust library of components including Cards, Flex containers, Header, Footer, and more for consistent design.
*   **Image Carousels & Sliders**: Utilizes `swiper` for dynamic product and content showcases.
*   **Modern & Responsive Design**: Styled with Tailwind CSS and DaisyUI for a beautiful, adaptive user experience across devices.
*   **Efficient Development Workflow**: Powered by Vite for fast development server and optimized builds.
*   **Modular Architecture**: Component-based structure ensures maintainable and scalable code.

## 🚀 Technologies Used

This project is built using a modern web development stack:

*   **Languages**: JavaScript, CSS
*   **Frameworks/Libraries**:
    *   [React](https://react.dev/) - A JavaScript library for building user interfaces.
    *   [Vite](https://vitejs.dev/) - Next-generation frontend tooling.
    *   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
    *   [DaisyUI](https://daisyui.com/) - Tailwind CSS component library.

### Dependencies

*   `@tailwindcss/vite`: Tailwind CSS integration for Vite.
*   `react`: Core React library.
*   `react-dom`: React package for working with the DOM.
*   `react-fast-marquee`: A lightweight React component for creating a fast-scrolling marquee effect.
*   `react-icons`: Popular icon library for React projects.
*   `swiper`: Modern touch slider with hardware accelerated transitions.
*   `tailwindcss`: Utility-first CSS framework.

### Development Dependencies

*   `@eslint/js`: ESLint core rules.
*   `@types/react`, `@types/react-dom`: TypeScript type definitions for React.
*   `@vitejs/plugin-react`: Vite plugin for React.
*   `daisyui`: Tailwind CSS component library.
*   `eslint`: Pluggable JavaScript linter.
*   `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`: ESLint plugins for React.
*   `globals`: Global variables for ESLint.
*   `vite`: Next-generation frontend tooling.


## 📂 Project Structure

```
.
├── public/                 # Static assets (favicon, logo)
│   ├── fav.png
│   └── Logo.png
├── src/                    # Source code
│   ├── assets/             # Static images and media used in components
│   │   ├── banner.png
│   │   ├── chair.png
│   │   ├── Footer.png
│   │   ├── greenchair.png
│   │   ├── greySofa.png
│   │   ├── newspic.png
│   │   ├── person1.jpg
│   │   ├── person2.png
│   │   ├── person3.jpg
│   │   ├── person4.jpg
│   │   └── sofa.png
│   ├── Components/
│   │   ├── Pages/          # Page-specific components
│   │   │   └── Home/       # Components specifically for the Home page
│   │   │       ├── Banner.jsx
│   │   │       ├── Collection.jsx
│   │   │       ├── Home.jsx
│   │   │       ├── News.jsx
│   │   │       ├── Products.jsx
│   │   │       └── TrustedClint.jsx
│   │   └── Utilities/      # Reusable UI components
│   │       ├── Card.jsx
│   │       ├── Carousel.jsx
│   │       ├── Container.jsx
│   │       ├── Flex.jsx
│   │       ├── Footer.jsx
│   │       └── Header.jsx
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global CSS styles
│   └── main.jsx            # Entry point for the React application
├── .eslint.config.js       # ESLint configuration file
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── README.md               # Project README file
└── vite.config.js          # Vite build configuration
```
