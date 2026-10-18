# Emmasha — Portfolio

Personal portfolio of **Ketuanze Emmasha Nembuanyi** (Emmasha), a software engineer based in Buea, Cameroon. It presents my background, the projects I have built, my skills, and how to get in touch.

## Tech stack

- React
- Vite
- Tailwind CSS
- Framer Motion

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal (Vite defaults to http://localhost:5173).

## Contact form

The contact form sends messages to a Formspree endpoint read from the `VITE_FORM_ENDPOINT` environment variable. Copy the example file and set your own endpoint:

```bash
cp .env.example .env.local
```

```bash
VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

If `VITE_FORM_ENDPOINT` is not set, the form is not shown and only the contact links are displayed.
