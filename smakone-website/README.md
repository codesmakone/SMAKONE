<div align="justify">

# SMAKONE Website Project Documentation

This repository houses the official website for the **Student Council of SMAK 1 PENABUR Jakarta** (OSIS SMAK 1 PENABUR Jakarta).  
**Address:** Jl. Tanjung Duren Raya No.4, RT.12/RW.2, Tj. Duren Utara, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470.

This documentation serves as the central technical reference for the SMAKONE website project. It outlines the architecture, setup procedures, testing protocols, infrastructure design, and deployment methodologies. To cater to a potentially diverse team and maintain international coding standards, this documentation is written exclusively in English.

---

## 1. System Overview and Technical Architecture

The SMAKONE website is a digital platform designed to provide information regarding school programs, extracurricular clubs, student profiles, and recent events. It is built using a modern JavaScript stack, structured heavily as a Single Page Application (SPA). This SPA architecture ensures rapid transitions between pages, reducing server latency during navigation. 

To maintain code hygiene and scalability, the underlying codebase enforce a strict separation of concerns. Global styles, independent UI components, routing logic, and static assets are explicitly divided into top-level directories to prevent spaghetti code and minimize merge conflicts among concurrent developers.

---

## 2. Global Directory Structure

The project root contains several critical directories and configuration files that orchestrate the build process and source code management.

### Root Directories
*   **`src/`**: The primary workspace. All React components, page layouts, graphical assets, hooks, and CSS stylesheets reside here.
*   **`public/`**: Stores static files such as `index.html`, raw favicons, and manifest files. These files are not processed by Webpack and are copied completely intact during the build process.
*   **`config/` & `scripts/`**: These directories hold the low-level build configurations (like Webpack overrides) and node scripts used to compile, start, and test the project. 
*   **`build/`**: An auto-generated output folder. When compiled for production, all minimized JS/CSS bundles and assets are exported here. *Note: This directory shouldn't be tracked manually in version control.*

### Main Configuration Files
*   **`package.json`**: Acts as the project manifesto, recording all third-party Node.js dependencies (e.g., React Router, TailwindCSS) and execution scripts.
*   **`tailwind.config.js` & `postcss.config.js`**: Contains all strict configuration rules, styling theme overrides, and color palettes specific to the SMAKONE design system.

---

## 3. Documentation Hub

To prevent this root file from becoming an endless scroll of technical jargon, detailed interface and architectural rules have been separated into a dedicated `docs/` folder. Please refer to them below:

*   **[Component Architecture Guidelines](docs/components.md)**: Explore the detailed breakdown of the `src/Component/` directory. This includes standardizing the UI blocks, global navigation components, and state encapsulation.
*   **[Pages and Routing Architecture](docs/pages.md)**: Explore the logic behind the `src/Pages/` directory, which covers how routing ties different UI components into complete, functional screens like the Clubs gallery or the OSIS profiles.

---

## 4. Local Development Environment

Before attempting to modify the source code, you must initialize the project on your local machine by installing all necessary dependencies.

### Installation Prerequisites
1.  **Node.js**: The long-term support (LTS) environment is strictly required. 
2.  **Package Manager**: You must have `npm` installed.

### Quick Start Commands
Run the following executions sequentially on your terminal:

```bash
# Clone the repository to your local machine
git clone <repository-url>

# Navigate into the project's root folder
cd smakone-website

# Install all required development and production dependencies
npm install

# Start the Webpack development server (usually on http://localhost:3000)
npm start
```

---

## 5. Deployment Procedures

The deployment pipeline relies on generating optimized static assets for the production server. This process completely strips away heavy development debugging tools, resulting in a lightweight, highly performant bundle.

1.  Before deploying, ensure your active branch is fully synchronized with the `main` branch to avoid missing the latest validated features.
2.  Execute the command `npm run build` in your terminal. This triggers the compiler to package the entire React application into a minified chunk inside the `build/` folder.
3.  Upload the entire contents of the recently generated `build/` directory to the remote production server using SFTP/SSH, ensuring it explicitly targets the server's public web directory.

---

## 6. Testing Methodologies

Ensuring a crash-free experience for the end-user is critical. Before a new Pull Request is finalized and merged, developers must guarantee that their code conforms to the existing UI layout and doesn't break dependent components.

```bash
# Initiate the integrated unit testing suite
npm test
```

Currently, developers are expected to manually verify UI stability across multiple screen ratios (mobile, tablet, desktop) to ensure the utility classes defined in Tailwind CSS scale correctly without breaking the grid structure.

</div>
