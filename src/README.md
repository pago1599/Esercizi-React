COMPONENTS

Create a new React application with vite and remove all the files within the src folder.
Inside src folder create a Hello function component that renders the "Hello, World!" message within an h2 tag.
Write a function component called App that renders the Hello component within a div tag.
Create a new index.jsx file within the src folder and render the App component using the createRoot function and the render method on the created root's object.
Start the application with the npm run dev command and open the application in your browser (the default location is http://localhost:5173).
Create a new Message component that renders a p tag with the message "What a beautiful day!".
Render the new component within the Hello component. Can you use the Hello component more than once in the App component? What happens if you do? Can you render the Message component directly within the App component? What happens if you do? Write your answers in a comment Change Vite's default port to 3000 by modifying the vite.config.js file.

PROPS

In a React application:

Create a Welcome function component that receives a name prop and renders the Welcome, {name}! message within a p tag.
Render this component to you App component, passing it a name prop of your choosing. Set a default value for the name prop.
Add a second prop called age and renders it below the 'welcome' message, within a p tag after the message "Your age is ".
Modify the value passed to the name prop so that it's contained within a strong tag.
Extract the "Your age is " message into a new component called Age and render it within the Welcome component.
Pass to the Age component the age prop that Welcome is receiving from the App component.
