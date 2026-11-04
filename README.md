# Palak Badyal | Portfolio

Personal portfolio of **Palak Badyal**, a B.Tech Computer Science & Engineering student at NIT Srinagar (2024-2028). It covers my education, skills, projects, experience and achievements, with a code-editor look: a terminal-style intro, a file-tree sidebar and a dark theme.

<!-- Add your live link here, for example: **Live site:** https://your-username.github.io/your-repo/ -->

## Features

- **Terminal hero:** a typing effect in a command-line style intro, with key stats at a glance
- **Sidebar navigation:** file-style links (`about.js`, `skills.js`, ...) that highlight the section you are reading
- **Education panel:** an expandable "View more" section with semester-wise SGPA and CGPA
- **Project cards:** CashFlowAI, Safar Saarthi website, Smart Podium case study, Amazon Clone, Tic Tac Toe and more
- **Experience timeline:** internship, startup coordination and event leadership roles
- **Resume download:** opens the PDF directly from the hero section
- **Responsive:** works from phone to widescreen, with a slide-in menu on small screens
- **Accessible:** skip link, keyboard navigation, visible focus states, and reduced-motion support

## Tech stack

- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (no frameworks, no build step, no dependencies)
- Google Fonts: Space Grotesk and JetBrains Mono

## Project structure

```
.
├── index.html                 # page content
├── index.css                  # styles and theme variables
├── script.js                  # typing effect, scroll reveal, nav, education panel
├── profile.jpeg               # profile photo
├── thumbnail.png              # link-preview image
├── Palak_Badyal_Resume.pdf    # resume
└── README.md
```

## Run locally

No installation needed. Open `index.html` in a browser.

To serve it from a local server instead:

```bash
# Python
python -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## Customise

- **Colours:** edit the variables in the `:root` block at the top of `index.css`
- **Content:** edit the matching section in `index.html`
- **Resume:** replace `Palak_Badyal_Resume.pdf` and keep the same file name

## Deploy on GitHub Pages

1. Push the files to the `main` branch.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. Save. The site goes live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Projects mentioned

- [CashFlowAI](https://github.com/palakbadyal69-wq/Cash_Flow_): AI-powered finance tracker, in development

## Contact

- Email: palakbadyal69@gmail.com
- LinkedIn: [palak-badyal](https://www.linkedin.com/in/palak-badyal-947a18355)
- GitHub: [palakbadyal69-wq](https://github.com/palakbadyal69-wq)

&copy; Palak Badyal. All rights reserved.