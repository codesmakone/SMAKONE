<div align="justify">

# Pages and Routing Documentation

This section provides an intricate breakdown of the `src/Pages/` directory. While components provide the fundamental building blocks (like bricks and mortar), the Pages act as the master architects mapping out where those components should be placed. The routing engine ensures that when a user requests a specific URL, the corresponding Page is instantly snapped into the main view, successfully achieving a fast, single-page application (SPA) experience.

---

## 1. Directory Structure within `src/Pages/`

Due to the immense scope of the SMAKONE website covering multiple school divisions and student organizations, the `Pages/` directory is highly categorized. Below is a comprehensive breakdown of exactly what resides inside this critical folder and how the domains are separated:

### Primary Navigational Pages
These directories correspond to the top-level core pages accessible directly from the main navigation menu.

*   **`Home/`**: Contains the composition logic for the main landing page. This page acts as the central hub, synthesizing promotional hero components, brief introductory sections, and quick links guiding users into deeper subsections.
*   **`TentangSMAK1/`**: The "About Us" section of the website. It houses pages that provide historical context, the school's geographical location information, and overarching structural details regarding the institution.
*   **`NoMatchPages/`**: The fallback routing domain. If a user manually types a broken URL or navigates to a dead link, the router intercepts the request and safely renders the 404 Error page defined within this directory, preventing application crash states.

### Student Organizations and Communities
Directories designed to isolate the administrative portfolios and profile tables for distinct overarching student entities.

*   **`Osis/`**: Entirely dedicated to the Student Council (OSIS). It structures the heavy visual tables defining board member hierarchies, committee presentations, and major operational program agendas.
*   **`Ass1st/`**: Houses the standalone pages explaining the sub-divisions and specialized work programs specifically managed under the ASS1ST portfolio umbrella.
*   **`Smukiers/`**: A community-focused page cluster dedicated to general student body representations and specific community-driven publication metrics.
*   **`Alumni/`**: Contains the mapping architecture that dynamically presents graduate profiles, alumni testimonies, and historical graduation cohort grids.

### Special Interest and Curricular Segments
These directories host highly specific, data-heavy presentation views separated heavily from the core structural pages.

*   **`Clubs/`**: The extracurricular hub. This massive directory splits into individual standalone pages representing each specific club (e.g., F1RST). It isolates photo galleries and club descriptions so they don't visually contaminate one another.
*   **`Kegiatan/`**: Dedicated to major institutional events and structured activities (such as Model United Nations instances or broad school competitions).
*   **`Emagz/`**: Governs the routing for the digital electronic magazine distribution, handling the layout composition required for showcasing PDF flipbooks or embedded digital articles.

---

## 2. The Core Philosophy of a "Page"

It is exceptionally critical to understand the architectural distinction between a Page and a Component. 

A file inside `src/Pages/` **should rarely construct UI elements from scratch**. Instead, a Page functions strictly as a high-level assembler. The fundamental workflow inside a Page file should be:
1.  Importing prefabricated, styled visual elements directly from `src/Component/`.
2.  Executing asynchronous data calls (if necessary) to retrieve JSON structures or database arrays.
3.  Injecting that retrieved localized data linearly down into the imported components via React props.

If a developer finds themselves writing massive blocks of raw HTML/JSX styling code directly inside a file positioned within the `src/Pages/` directory, they are breaching the architectural separation of concerns. That complex raw component should immediately be extracted outward, nested securely within `src/Component/`, and simply imported back into the respective Page view.

</div>
