
## Getting Started

Requires `nodejs` version 18 or higher

1) After cloning, run `npm install` to install dependencies
2) Generate documentation
- For dummy content run `npm run dummy_docs` OR
- For actual content see "Generating versioned documentation" below 
3) Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Generating versioned documentation

Clone documentation repos in parallel folders next to this one

1) clone https://github.com/oskariorg/oskari-documentation -> (Should be found in `../oskari-documentation`)
2) clone https://github.com/oskariorg/oskari-frontend -> (Should be found in `../oskari-frontend`)
3) clone https://github.com/oskariorg/oskari-server -> (Should be found in `../oskari-server`)
4) Run `npm run docs [version] [bln_latest]` where:
- `[version]` is like `2.13.0` (defaults to unreleased)
- `[bln_latest]` is like `true` (defaults to false)

This:
- shovels in everything under `oskari-documentation` to `_content/docs/[version]/`
- copies `ReleaseNotes.md` and `api/CHANGELOG.md` to  `_content/docs/[version]/[ordinal] Changelog/`

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
