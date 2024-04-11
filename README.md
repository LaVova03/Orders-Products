### `git clone https://github.com/LaVova03/Orders-Products.git`

First clone the entire project onto your computer.
In the command line, type this command and specify the folder on your PC where you want to dump the project.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

The following dependencies will be installed automatically:
-bootstrap;
-react-bootstrap;
for a modal window;
-react-dom;
-react-router-dom:
for routing between pages;
-react-redux;
-redux-thunk;
for global storage of states, in this project for storing the user’s photo, so that when the page changes, the photo is not lost;
-css-loader;
to work with a modular style structure, to avoid conflicting styles of different components;
-@babel/plugin-proposal-private-property-in-object;
This helps in creating more secure code where certain data needs to be hidden from outside access and changes.

### `npm start`

This command runs the project locally on: http://localhost:3000/

### `About Project`

The project is designed to work with the posting of invoices, creating a product card, registration orders, tracking the movements of goods, as well as deregistration of products.
