# PetLand App

This is a simple Petland app created with React.js and is meant to assist users in choosing their next furry friend.

## Description

A description of features included in the main components of the PetLand app:

- Implemented several React features in this project. I extracted smaller child components from the main App component based on single responsibility, complexity, and reusability
  -Separated components mostly by their functionality or use; the Header component mainly used as an introduction with the PetLand title and used to house the Login button
- The Login button has some conditional rendering that welcomes the user when signed in, and when signed out it prompts the user to please sign in
- Use of React props and destructured the props for better readability notably in the PetCard component where the data for the individual pets was imported from the parent App component which had the data passed to it from the separate data.js file that kept pet data housing information including pet name, pets’ favorite snacks, booleans that indicate if adopted or not, etc.
- The log in button in Header uses some more conditional rendering and created two functions that handle the login and logout
- Utilized React’s useState for the Header’s login and logout functionality, setting the user information when logged in with the “welcome..” passed in {user} data
- Use of ”lifting state” up to the App component for the user variable in handleLoginClick so it could be used in both components. The App.js needed it so that it could display in the header, “Welcome, {user}. This is an example in React of passing info up a component instead of down.
- The button has an onClick event listener to render the “login” and “logout” whenever the button is clicked
- Used useState in the App component to pass down the pet data(pet data held in state) into the PetCard component.
- Each individual pet card has access to the information (pet name, favorite snacks, image) this information is coming from use of props
- The idea for the PetForm component is obviously to add another pet to the list of default pets. This is done in the app by taking the newPet object from the PetForm component and pushing it up to the App component so that the new pet card is rendered to the bottom of the page when that form is submitted by the user
- On the form for adding a new pet in the PetForm component, I used an event handler function that holds the newPet object which holds the name and image for whatever is typed in by the user
- To do this ^ we had to sync up the value property of the input tag to the {name} state variable and did the same for the value property in image input for the {image} state variable
- Also set the Favorite Snacks value to “Dog Treats” for every new card generated

### Challenges or potential modifications

- As a challenge or modification I could add another input on the PetForm that allows for the user to add a customizable Favorite Snack, creating another useState variable for snacks and syncing up to the value in the input

- I realize I could have implemented more features such as routing or useEffect or other hooks but I didn’t have the time. I did however write a blog post on how to make Routes and a navbar for future reference so I’ll likely use that in future projects

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
