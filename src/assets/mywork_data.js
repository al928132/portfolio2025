import project1_img from '../assets/projectImg/portfolio.png'
import project3_img from '../assets/projectImg/barbers.png'
import project4_img from '../assets/project_4.svg'
import cover_img from '../assets/projectImg/cover.png'
import cover_code from '../assets/projects/cover.py?raw'
//import project6_img from '../assets/project_6.svg'
import logob_img from '../assets/projectImg/logob.png'
import logob_code from '../assets/projects/logob.py?raw'
import inventory_img from '../assets/projectImg/inventory.png'
import inventory_code from '../assets/projects/inventory.py?raw'
import op_art_img from '../assets/projectImg/op_art.jpeg'
import pattern_art_img from '../assets/projectImg/pattern.jpeg'
import cut_out_img from '../assets/projectImg/cutOut.jpeg'
import line_drawing_pdf from '../assets/projectImg/lineDrawing.jpeg'
import windfall from '../assets/projects/windfall paper.pdf'
import windfallDesign from '../assets/projects/Final Project.pdf'
import windfall_home from '../assets/projectImg/Homepage.png'
import rewire_report from '../assets/projects/Rewire Final Report.pdf'
import rewire_img from '../assets/projectImg/rewireLogo.png'
import travel_img from '../assets/projectImg/travelWish.png'

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
        w_tech: ["React", "Vite", "CSS", "JavaScript","AI"],
        w_link: "https://al928132.github.io/portfolio2025/",
        w_section: "Web Development"
    },
    {
        w_no: 2,
        w_name: "Travel Wishlist",
        w_img: travel_img,
        w_desc: "A simple travel wishlist app built with JavaScript, allowing users to add and manage their dream destinations.",
        w_tech: ["JavaScript", "CSS", "HTML5","AI"],
        w_link: "https://al928132.github.io/midtermproject/",
        w_section: "Web Development"
    },
    {
        w_no: 3,
        w_name: "Barber's Website",
        w_img: project3_img,
        w_desc: "A fully responsive website for a local barber shop, featuring service listings, appointment booking form, and contact information.",
        w_tech: ["HTML5", "CSS", "JavaScript", "AI"],
        w_link: "https://al928132.github.io/static-site-2/",
        w_section: "Web Development"
    },
    {
        w_no: 4,
        w_name: "AduLessons",
        w_img: project4_img,
        w_desc: "A website for a fictional online learning platform, that teaches young adults how to do basic life skills. The site includes a homepage, course listings, and an about page.",
        w_tech: ["JavaScript", "HTML5", "CSS", "AI"],
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
    //{
        //w_no: 6,
        //w_name: "E-commerce Mockup",
        //w_img: project6_img,
        //w_desc: "A high-fidelity e-commerce mockup designed in Figma and implemented in HTML/CSS, showcasing product cards, cart UI, and checkout flow.",
        //w_tech: ["Figma", "HTML5", "CSS"],
        //w_link: "#",
        //w_section: "UI / UX Design"
   // },
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
    {
        w_no: 9,
        w_name: "Op Art",
        w_img: op_art_img,
        w_desc: "A vibrant op art piece created with pencil and watercolor, showcasing dynamic patterns and optical effects.",
        w_tech: ["Pencil", "Watercolor"],
        w_link: "#",
        w_section: "Design Projects"
    },
    {
        w_no: 10,
        w_name: "Pattern",
        w_img: pattern_art_img,
        w_desc: "A bold pattern design created with pencil and watercolor, featuring intricate shapes and vibrant colors.",
        w_tech: ["Pencil", "Watercolor"],
        w_link: "#",
        w_section: "Design Projects"
    },
    {
        w_no: 11,
        w_name: "Cut Out Piece",
        w_img: cut_out_img,
        w_desc: "A creative cut-out art piece made from slicing through paper, demonstrating artistic expression and craftsmanship.",
        w_tech: ["Exacto Knife", "Paper"],
        w_link: "#",
        w_section: "Design Projects"
    },
    {
        w_no: 12,
        w_name: "Line Drawing",
        w_img: line_drawing_pdf,
        w_desc: "An intricate line drawing created with various pens, showcasing different techniques and styles.",
        w_tech: ["Pencil", "Pen"],
        w_link: "#",
        w_section: "Design Projects"
    },
    {
        w_no: 13,
        w_name: "Windfall App Report",
        w_img: windfall_home,
        w_desc: "A detailed report on a recent project, showcasing research and analysis.",
        w_tech: ["Word"],
        w_link: "#",
        w_section: "Reports",
        w_pdf: windfall,
        w_pdf_label: "View PDF"
    },
    {
        w_no: 14,
        w_name: "Windfall App Design",
        w_img: windfall_home,
        w_desc: "A a prototype of an app, showcasing research, analysis, and design.",
        w_tech: ["Figma"],
        w_link: "#",
        w_section: "Design Projects",
        w_pdf: windfallDesign,
        w_pdf_label: "View PDF"
    },
    {
        w_no: 15,
        w_name: "Rewire App Report",
        w_img: rewire_img,
        w_desc: "A report of the research that I did with a team, including UI/UX research and design research.",
        w_tech: ["Figma", "Google Docs"],
        w_link: "#",
        w_section: "Reports",
        w_pdf: rewire_report,
        w_pdf_label: "View PDF"
    },

]
export default mywork_data;