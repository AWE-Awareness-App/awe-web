# Setup

### `npm install`

You will need to install all the node packages to get starting the first time

# Running Locally

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Contributing

### Naming convention

| File Type                 | Naming Convention         | Example |
| --------                  | -------                   | ------- |
|Components, Classes        | PascalCase                | WorkshopRepository.tsx |
|Hooks, Utility Functions   | camelCase                 | useFetch.ts, formatDate.ts
|API Routes, Services       | kebab-case                | auth-api.ts, user-service.ts |
|General Files              | kebab-case or camelCase   | config.ts, env-variables.ts |


# CI/CD

### Netlify
The project will automatically build and deploy to production if something is pushed to the master branch on git.

# Useful Links

[Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
[NextJS](https://nextjs.org/docs)
