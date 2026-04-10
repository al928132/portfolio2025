# Portfolio 2025

Personal portfolio built with React + Vite and deployed to GitHub Pages.

---

## Adding a project to the Portfolio tab

All portfolio projects live in one file:

```
src/assets/mywork_data.js
```

### Step 1 – Add your image

Place your project screenshot or preview image inside `src/assets/`.  
Supported formats: `.png`, `.jpg`, `.jpeg`, `.svg`, `.webp`.

> **Tip:** keep images reasonably sized (ideally ≤ 500 KB) so the page loads fast.

### Step 2 – Import the image

Open `src/assets/mywork_data.js` and add an import at the top of the file:

```js
import myNewImg from '../assets/my_project_screenshot.png'
```

### Step 3 – Add a project object

Append a new entry to the `mywork_data` array:

```js
{
    w_no: 7,                          // unique integer — increment from the last entry
    w_name: "My New Project",         // name shown on the card and in the modal
    w_img: myNewImg,                  // the imported image variable (omit if no image yet)
    w_desc: "A short description…",   // shown inside the project modal
    w_tech: ["React", "CSS3"],        // technology tags displayed in the modal
    w_link: "https://example.com",    // live URL; use "#" if not yet deployed
    w_section: "Web Development",     // section heading in the portfolio grid
                                      // use an existing name to group with similar
                                      // projects, or a new name to create a new section
},
```

### Available sections (current)

| Section label | What belongs here |
|---|---|
| `Web Development` | Websites, web apps, landing pages |
| `UI / UX Design` | Figma mockups, design systems |
| `Tools & Scripts` | Python scripts, automation, data tools |

Add any new section label you like — it will appear automatically as a new group in the portfolio.

### Step 4 – Save and deploy

```bash
npm run build          # build for production
npm run preview        # preview locally
git push               # GitHub Actions will redeploy to GitHub Pages automatically
```

---

## Development

```bash
npm install      # install dependencies
npm run dev      # start local dev server
npm run build    # production build
```

---

## Tech stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) (hash-based routing for GitHub Pages)
- Google Fonts – Roboto Mono + Playfair Display
- GitHub Pages via Vite `base` config

