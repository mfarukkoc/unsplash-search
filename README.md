# Unsplash Search

Unsplash client implementation using [React](https://github.com/facebook/react).  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> API is limited with 50 requests per hour.

## About Search Feature

Search is sending request to `https://api.unsplash.com/search/photos/` using requested parameters. You can search with two parameters:

> Query (required): Free text search inside the selected collection or all of the images.

> Collections: Pre defined drop down selections.  
> Note: Collections are different from topics, they are albums created by users.

## Components

### Dropdown

Custom select input component, since default select input is not stylable with CSS the only way is creating custom component. Hard coded with collections array as application requirement.

### Spinner

Custom spinner with loading animation.

### ErrorAlert

Div for indicating errors.

### Navbar

Navigation bar component fixed to the top of the screen.

### App

Handles display of the images, search logic and pagination logic.

### unSplashService

Handles search request and caching.

## Installation

Run the following command from cmd in the project directory:  
`yarn`

Receive your API key from [Unsplash](https://unsplash.com/developers) then set the environment variables as following:  
`REACT_APP_UNSPLASH_API_ACCESS_KEY = API ACCESS KEY`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
