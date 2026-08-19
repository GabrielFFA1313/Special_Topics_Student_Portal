# Student Services Portal

## Project Description

A TypeScript-based Node.js project that models student data for a student
services portal. It demonstrates core TypeScript concepts including
interfaces, generics, and runtime type validation, along with a configured
development workflow using ESLint (linting) and Prettier (formatting).

The project defines a `Student` model, a generic `ApiResponse<T>` wrapper
type for representing API responses, and a runtime type guard (`isStudent`)
that validates unknown data against the expected `Student` structure.

## Requirements

- Node.js (v18 or higher recommended)
- npm (comes bundled with Node.js)
- Git

Check your installed versions with:

\`\`\`bash
node --version
npm --version
git --version
\`\`\`

## Installation Instructions

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/GabrielFFA1313/Special_Topics_Student_Portal.git
   cd Special_Topics_Student_Portal
   \`\`\`

2. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

## How to Run the Project

Compile the TypeScript source to JavaScript, then run it with Node:

\`\`\`bash
npm run build
npm run start
\`\`\`

- `npm run build` compiles `src/index.ts` into the `dist/` folder using `tsc`.
- `npm run start` runs the compiled output with `node dist/index.js`.

## How to Run Linting

\`\`\`bash
npm run lint
\`\`\`

This runs ESLint against all TypeScript files in `src/` and reports any
code quality issues (e.g. unused variables, type errors) without modifying
any files.

## How to Format Code

\`\`\`bash
npm run format
\`\`\`

This runs Prettier and automatically rewrites files in `src/` to follow a
consistent code style (indentation, quote style, semicolons, etc.), based
on the rules defined in `.prettierrc`.

## Development Workflow

1. Write or modify TypeScript code inside `src/`.
2. Run `npm run lint` to catch code issues early.
3. Run `npm run format` to keep code style consistent.
4. Run `npm run build` to compile and confirm there are no type errors.
5. Run `npm run start` to verify the program behaves as expected.
6. Stage and commit changes with a clear commit message:

   \`\`\`bash
   git add .
   git commit -m "Describe the change"
   git push
   \`\`\`

## AI Usage Policy

AI tools may be used to assist development. All AI-generated code must be
reviewed, modified when necessary, tested, and verified before commit.