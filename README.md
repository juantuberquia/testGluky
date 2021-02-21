# Test Gluky

## ✍🏻 Description
This app was built in React.js, the aim  is some consuming API for login, the show content about images, text, in others.

You can see the result here → [ Test Gluky ]  https://test-gluky.netlify.app/

## Technologies
1. HTML
2. CSS -> Boostrap
3. React.js -> hooks
4. API Pixabay
5. API login Google

# se recomienda abrir la aplicacion en un navegador incognito, para evitar conflictos con los cookies

## Componentes

1. Form: en el componente form encontrara el logueo, consumiendo la API de google, si dicha validacion es correcta carga el componente Pixabay y realiza una peticion Get a la API de Pixabay en el archivo APP.
2. Pixabay: luego de realizar la peticion GET, en el componente Pixabay se mapea el array de objetos con toda la informacion solicitada a la API, en el que se muestran imagenes relacionadas y sus respectivos me gustas.
3. Imgs:  es el componente mapeado, al que se recibe como props la : URL de la img, texto sobre la imagen y los me gustas.
4. CreateContent: en dicho componente se postea o se realiza una publicacion, que consta de un texto y su respectivo me gusta.
5. ShowContent: se muestra la informacion pertinente a la publicacion, en el que se mapea la informacion diligenciada, a traves del componente Imgs.
6.  Error: dicho componente es el encargado de manejar los errores, en el componente CreateContent


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
