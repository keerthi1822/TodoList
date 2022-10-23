# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

****************************************************************

outDir: tells the compiler to put the compiled code into the dist/js folder.

rootDir: informs TypeScript to compile every .ts file located in the src folder.

include: tells the compiler to include files that are in the src directory and sub-directory.

exclude: will exclude the files or folders passed in the array during compile-time.

node_modules : contains code for the third-party libraries used by your app.

public : contains the assets that’ll help build your final app, including things like index.html and your app’s favicon.

src : contains the source code for the app you’ll be working with most.

.gitignore : specifies which files to ignore for source control.

package.json : contains your app’s configuration, including things like dependencies and scripts.

README.md : starts with information about create-react-app, but in a real application you should describe the app itself.

tsconfig.json : contains configuration for the typescript compiler.

yarn.lock : contains the exact version for all project dependencies. Should be checked into version control.