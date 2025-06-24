# Culinary Delights App

This project is a simple cooking/recipe web app built with **Next.js** and **Contentful** as the CMS. Below you'll find important context, arguments for technical decisions, and usage instructions.

## 🛠️ Tech Stack & Context

- **Next.js**: Used as the main React framework for server-side rendering and routing.
- **Contentful**: Used as the headless CMS to manage all content (sections, posts, images, etc.).
- **GraphQL**: All Contentful data is fetched using GraphQL queries for flexibility and efficiency.
- **Plain CSS (BEM Methodology)**: Styling is done with plain CSS using the BEM (Block Element Modifier) methodology for clarity and maintainability. No CSS-in-JS, preprocessors, or utility frameworks are used, as the app only has two main sections and simplicity was preferred.

## 📦 Contentful Limitations & Decisions

- **Rich Text & Markdown**: Contentful supports rich text features like color, bold, and other formatting via Markdown. For this project, I decided to **omit Markdown rendering** and display only plain text for simplicity and consistency.
- **GraphQL API**: All data is fetched from Contentful using its GraphQL API, which allows for precise and efficient queries.

## 🚀 Running the App

To start the development server, simply run:

```bash
yarn dev
```

## 💡 Design & Methodology

- **BEM (Block Element Modifier)**: All CSS classes follow the BEM convention for better readability and scalability.
- **No CSS Preprocessor**: Chose plain CSS for simplicity, as the project only contains two main sections.
- **No Styled Components**: Avoided CSS-in-JS to keep the stack minimal and the build fast.

## 🙏 Thanks

Thank you for checking out this project! If you have suggestions or want to contribute, feel free to open an issue or PR.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
