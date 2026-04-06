<div align="justify">

# UI Components Architecture Documentation

This section provides an in-depth breakdown of the `src/Component/` directory. Rather than housing large, monolithic files, the SMAKONE website utilizes a strictly component-based architecture. This means every visual element ranging from buttons to massive navigation menus is abstracted into isolated pieces. The primary objective is to maximize reusability, ensure consistency in design, and eliminate redundant code.

---

## 1. Directory Structure within `src/Component/`

To prevent the `src/Component/` folder from becoming a chaotic repository of random scripts, elements are aggressively categorized into descriptive subdirectories based on their primary function and domain. 

### Core Structural Components
These directories house the global bounding boxes and overarching navigational elements that tie the entire website together. These components are generally imported directly into the main `App.js` or the highest level routing wrapper.

*   **`Nav/`**: This directory contains all components relating to the site's top navigation bar. It is strictly reserved for user routing menus, mobile hamburger menus, and the sticky header logic.
*   **`Footer/`**: Stores the global footer components, dictating the bottom layout of the website containing institutional copyrights, external social media links, and concluding contact information.
*   **`Layout/`**: Houses functional wrapper components. If multiple pages share an exact spacing structure or a specialized background container, the reusable layout wrapper is defined here and wraps the children pages.

### Domain-Specific UI Components
Because the SMAKONE website spans multiple large sub-organizations, certain standalone UI components are only relevant to specific pages. These are grouped into their own domain folders within the components directory to isolate their logic.

*   **`Osis/`**: Contains specific data tables, organizational hierarchy grids, and profile cards explicitly used for rendering Student Council (OSIS) parameters.
*   **`Ass1st/`**: Stores components tailored specifically for the ASS1ST subsystem.
*   **`Alumni/`**: Houses visual components dedicated to rendering alumni testimonies, graduation years, and post-academic profiles.
*   **`Home/`**: Stores unique UI blocks that only appear on the primary landing page (e.g., hero banners, dynamic promotional carousels).

### Content and Core Utilities
*   **`Content/`**: A general repository for standardized content blocks like text-image alternations, stylized quote blocks, and reusable typography headers.
*   **`Data/`**: Often utilized for components that map heavily over static JSON objects or hardcoded arrays to generate lists without cluttering the main page files.
*   **`ScrollToTop.js`**: A critical utility component specifically engineered to intercept routing transitions and reset the browser's window scroll position gracefully to the Y-axis zero coordinate.
*   **`useAnalyticsEventTracker.js`**: A custom hook component dedicated to managing and broadcasting user interaction events (like clicks) to external analytics services.

---

## 2. Best Practices for Component Development

When creating or modifying a file within `src/Component/`, developers must adhere to the following rigorous engineering standards to maintain system stability.

*   **Destructuring Props Data**: Components should never blindly accept monolithic data objects if they only need a single string. Always explicitly destructure incoming props (e.g., `const ProfileCard = ({ name, role, image }) => { ... }`). This explicit definition provides immediate clarity regarding what data the component structurally requires to render successfully.
*   **State Encapsulation**: A component should manage its own internal state using `useState` hooks. For instance, if a mobile navbar has an internal boolean status dictating whether it is expanded or collapsed, that state logic must never leak into the global parent route. Let the component handle its own interactivity privately.
*   **Utility-First Styling Restrictions**: Developers are strictly forbidden from writing standalone raw CSS files to manually align components. Instead, spatial dimensions, margins, paddings, and typographic colors must strictly rely on utility-first generic classes directly embedded into the element tags (e.g., utilizing `flex justify-between items-center bg-blue-900 text-white`). This universally ensures that the entire project perfectly respects a standardized design token system.

</div>
