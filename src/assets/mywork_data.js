import project1_img from '../assets/project1_img.png'
import project3_img from '../assets/project_3.svg'
import project4_img from '../assets/project_4.svg'
import cover_img from '../assets/projectImg/cover.png'
import cover_code from '../assets/projects/cover.py?raw'
import project6_img from '../assets/project_6.svg'
import logob_img from '../assets/projectImg/logob.png'
import logob_code from '../assets/projects/logob.py?raw'
import inventory_img from '../assets/projectImg/inventory.png'
import inventory_code from '../assets/projects/inventory.py?raw'

// ── Python source files (imported as raw text via Vite's ?raw suffix) ────────
// TO ADD MORE PYTHON FILES:
//   1. Copy your .py file into:  src/assets/projects/
//   2. Add an import line here:  import myScript_code from '../assets/projects/myScript.py?raw'
//   3. Reference it in the array below with:  w_code: myScript_code
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD A PROJECT
// ─────────────────────────────────────────────────────────────────────────────
// 1. Import your project image at the top of this file:
//      import myNewImg from '../assets/my_new_project.png'
//
// 2. Add a new object to the array below with these fields:
//      w_no      – unique integer ID (increment from the last one)
//      w_name    – display name shown on the card and detail page
//      w_img     – the imported image variable
//      w_desc    – paragraph description shown on the detail page
//      w_tech    – array of technology strings, e.g. ["React", "CSS3"]
//      w_link    – live project URL, or "#" if not deployed yet
//      w_section – section/category label, e.g. "Web Development"
//                  Use an existing section to group with related projects,
//                  or a new string to create a new section automatically.
//
// HOW TO ADD A RUNNABLE PYTHON PROJECT
// ─────────────────────────────────────────────────────────────────────────────
//   a. Place your .py file in:  src/assets/projects/
//   b. Import it at the top:    import myScript_code from '../assets/projects/myScript.py?raw'
//   c. Add to the object below: w_code: myScript_code
//   d. Set w_tech to include "Python"
//
//   The project card will automatically show a live Python runner (powered by
//   Pyodide / WebAssembly) with syntax-highlighted code, an optional input
//   field (shown when your script calls input()), and a Run button.
//
// 3. Save the file – the portfolio page will pick up the change automatically.
// ─────────────────────────────────────────────────────────────────────────────

const mywork_data = [
    {
        w_no: 1,
        w_name: "Portfolio Website",
        w_img: project1_img,
        w_desc: "A personal portfolio website built with React and Vite, showcasing my projects and skills. Features a gallery wall layout, typing animation, and responsive design.",
        w_tech: ["React", "Vite", "CSS3", "JavaScript"],
        w_link: "https://al928132.github.io/portfolio2025",
        w_section: "Web Development"
    },
    {
        w_no: 2,
        w_name: "UI Design System",
        w_desc: "A comprehensive design system with reusable components, consistent color palettes, and typography guidelines built for modern web applications.",
        w_tech: ["Figma", "CSS3", "HTML5"],
        w_link: "#",
        w_section: "UI / UX Design"
    },
    {
        w_no: 3,
        w_name: "Responsive Landing Page",
        w_img: project3_img,
        w_desc: "A fully responsive landing page for a creative agency, featuring smooth scroll animations and a mobile-first approach.",
        w_tech: ["HTML5", "CSS3", "JavaScript"],
        w_link: "#",
        w_section: "Web Development"
    },
    {
        w_no: 4,
        w_name: "JavaScript Web App",
        w_img: project4_img,
        w_desc: "An interactive web application built with vanilla JavaScript featuring dynamic data rendering, local storage, and a clean UX.",
        w_tech: ["JavaScript", "HTML5", "CSS3"],
        w_link: "#",
        w_section: "Web Development"
    },
    {
        w_no: 5,
        w_name: "Game Cover",
        w_img: cover_img,
        w_desc: "A Python-based tool that uses the turtle function to draw a custom game cover design, demonstrating creativity and programming skills.",
        w_tech: ["Python"],
        w_link: "#",
        w_code: cover_code,
        w_section: "Python Projects"
    },
    {
        w_no: 6,
        w_name: "E-commerce Mockup",
        w_img: project6_img,
        w_desc: "A high-fidelity e-commerce mockup designed in Figma and implemented in HTML/CSS, showcasing product cards, cart UI, and checkout flow.",
        w_tech: ["Figma", "HTML5", "CSS3"],
        w_link: "#",
        w_section: "UI / UX Design"
    },
    {
        w_no: 7,
     w_name: "Logo Design",
     w_img: logob_img,
     w_desc: "A modern and minimalist logo design created for a fictional brand, demonstrating proficiency in Adobe Illustrator and branding principles.",
    w_tech: ["Python"],
      w_link: "#",
      w_code: logob_code,
      w_section: "Python Projects"
    },
    {
        w_no: 8,
        w_name: "Inventory Counter",
        w_img: inventory_img,
        w_desc: "A Python-based tool that allows for counting inventory items with a simple command-line interface, demonstrating practical programming skills and problem-solving.",
        w_tech: ["Python"],
        w_link: "#",
        w_code: inventory_code,
        w_section: "Python Projects"
    },
]

export default mywork_data;