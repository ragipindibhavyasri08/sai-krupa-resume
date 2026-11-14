# Kammari Saikrupa — Motion Resume (React)

A motion-graphics style resume built with React + Vite.

## Run it

    npm install
    npm run dev

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for hosting

    npm run build

Upload the `dist/` folder to Netlify, Vercel, GitHub Pages or any static host.

## Edit your details

Open `src/Resume.jsx`. Everything you are likely to change is at the top of the file:
EMAIL, PHONE, PORTFOLIO, EDUCATION, EXPERIENCE and LANES (the skills timeline).

## Use inside another project

Copy `src/Resume.jsx` into your project and import it:

    import Resume from "./Resume";

It only needs React. Styles are scoped under `.rs`.
