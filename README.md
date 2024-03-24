# Learnopia

Learnopia is an educational website designed to facilitate learning experiences for users. Whether you're a student seeking academic resources, an educator looking for teaching materials, or someone eager to expand your knowledge, Learnopia offers a platform to discover, share, and engage with educational content.

## Description

Learnopia is built using a combination of modern technologies to provide a seamless user experience:

- **Frontend:** Developed with ReactJS, a popular JavaScript library for building user interfaces.
- **Backend:** Powered by NodeJS, providing a robust server-side environment for handling requests and managing data.
- **Styling:** Utilizes Tailwind CSS for efficient and customizable styling, allowing for a polished and responsive design.
- **Database:** MongoDB is employed as the database solution, offering flexibility and scalability for storing and retrieving data efficiently.

## Pre-requisites

Before getting started with Learnopia, ensure you have the following prerequisites installed:

- [git](https://git-scm.com/) - Version 2.13 or greater
- [NodeJS](https://nodejs.org/en/) - Version 16 or greater
- [npm](https://www.npmjs.com/) - Version 6 or greater

## Getting Started

To run Learnopia in a development environment, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/learnopia.git`
2. Navigate to the project directory: `cd learnopia`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit [http://localhost:5173](http://localhost:5173) to view Learnopia.

## Environment Variables

Learnopia utilizes an `.env` file to manage various environment variables. Ensure you configure this file as needed for your development environment.

## Folder Structure

```
.
├── package.json
├── postcss.config.js
├── vite.config.js
├── index.html
├── public
│   ├── assets
│   │   ├── images  # All Project Images
│   │   └── fonts   # Project Fonts
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.jsx
│   ├── components  # UI and Detected Common Components
│   ├── constants   # Project Constants
│   ├── hooks       # Helpful Hooks
│   ├── index.jsx
│   ├── pages       # All Route Pages
│   ├── Routes.jsx  # Routing
│   ├── styles
│   │   ├── index.css  # Other Global Styles
│   │   └── tailwind.css  # Default Tailwind Modules
│   └── util
│       └── index.jsx  # Helpful Utilities
└── tailwind.config.js  # Entire Theme Config, Colors, Fonts, etc.
```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: **Note: this is a one-way operation. Once you `eject`, you can’t go back!** If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.

## Installing Dependencies

You can install any dependencies, such as React Router, using npm or yarn:

```sh
npm install --save react-router
```
or
```sh
yarn add react-router
```

## Contributors

This project was designed and developed by:
- [Rupal](https://github.com/rupal-draft)
- [Sattwikee](https://github.com/sattwikeeg100)
- [Souvik](https://github.com/souvik017)
  
---

### Join Us!
Help make Learnopia even better! Contribute now by forking the repository and submitting your changes. Let's build together!
