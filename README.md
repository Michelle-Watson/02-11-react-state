# Lab: React State

## Overview

This project was completed as part of a **React State** lab, focused on managing state and building interactive React components. Key concepts include handling state, updating state via user input, and conditionally styling elements.

**Technologies Used**:  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
[![uuid](https://img.shields.io/badge/uuid-v8.3.2-orange?style=flat)](https://www.npmjs.com/package/uuid)

## Key Learnings 📚

- **State Management**: Used `useState` to store card data and pass it between components using props.
- **Adding New Cards**: Implemented forms for dynamically adding cards to state without direct mutation.
- **Active Card State**: Managed active card tracking using unique `id` (via `uuid`) and conditional styling.
- **Props & Functions**: Passed functions and state between parent (`App`) and child components (`Card`, `CardList`).
- **DDAU**: Data Down 🔢⬇️, Actions Up 🎬⬆️
  - Data flows down: Data flows from parent to child components through props. This means that a parent component can pass data to a child component, but the child cannot directly modify the data from the parent. Instead, the child can receive the data and display or use it.
  - Events flow up: Events flow from child to parent components. This means that when something happens in a child component (like a button click), the event can trigger a function in the parent component. The parent can then update the state or perform some action based on the event from the child.

## Purpose 🎯

As a **Teaching Assistant (TA)** at **BrainStation**, I’m sharing this project as a learning resource for students. It demonstrates core React concepts such as state management, event handling, and conditional rendering.

## Get in Touch 🫱🏾‍🫲🏾

<p align="left">
<a href="https://www.linkedin.com/in/michelleawatson" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn: linkedin.com/in/michelleawatson" />
</a>
<a href="mailto:michellealiciawatson@gmail.com">
  <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email: michellealiciawatson@gmail.com" />
</a>
<a href="https://discord.com/users/234360551742898176">
  <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord: michelle_5026" />
</a>
  <a href="https://steamcommunity.com/id/maybuns/">
  <img src="https://img.shields.io/badge/Steam-181717?style=for-the-badge&logo=steam&logoColor=white" alt="Steam: maybuns" />
</a>
  </a>
  <a href="https://myanimelist.net/profile/xmaybunnyx">
  <img src="https://img.shields.io/badge/MyAnimeList-2E51A2?style=for-the-badge&logo=MyAnimeList&logoColor=white" alt="MyAnimeList: xmaybunnyx" />
</a>
</p>

## Getting Started

[Get a fresh start with the starter code](./lab-react-state-starter.zip).

## Storing Data in State

1.  Modify the `App` component to store an array of card contents (you can find the existing array in the `CardList` component) as a state of the `App` component. Name the state variable `cardContent` and the update function `setCardContent`.
2.  Pass the array stored in the `cardContent` state variable to the `CardList` component using props.
3.  Modify the `CardList` component to use the array from props rather than the one stored locally.

## Changing Data in State

Now that we have the cards in state, let’s add a feature to allow users to add new cards. To achieve this, we will use our `CardForm` component to alter the card content array by adding a new item to the list.

1.  Create a function in the `App` component called `addCard` that adds a new object to the content array (with key/values for `title` and `content`); you will need to use `setCardContent()` to do this. The `addCard` function should have parameters for `title` and `content` which will be used as the values of the new object.

Note that you should [never mutate state directly](https://react.dev/learn/updating-arrays-in-state) which is why we need to use `setCardContent()` and not `cardContent = [/* newValues */]`. For adding a new element to an array immutably, you can create a new array and use the spread `...` syntax.

2.  Pass the `addCard` function to the `CardForm` component using props.
3.  In the `submitHandler` function in the `CardForm` component, invoke your `addCard` function from your `App` component that you passed in as props. Make sure to pass the form input values for `title` and `content` as arguments to the `addCard` function.
4.  When you invoke your `addCard` function from within your `submitHandler`, you should see a new card appear on your screen with the title and content that you fill in from your form!

## Diving Deeper

### Active Card

1.  In the `App` component, create a new state variable called `activeCard` and set it to `null` for the moment. We'll use this to store the `id` of the active card.
2.  Modify the array of card content stored in the state to include an `id` property in all card objects. The value of the `id` property should be a randomly generated id from the [uuid npm package](https://www.npmjs.com/package/uuid).
3.  Modify the `addCard` function to add an `id` to the new card object when updating the `cardContent` state variable. Again, the value of the `id` property should be a uuid.
4.  Also, consider refactoring the `.map()` in the `CardList` component to use the new `id` property we gave to all cards for the `key` prop.

For the next few steps, we need to make sure that we understand the structure of our app, primarily where we hold state and where we need to change it.

We currently have an app comprised of components that follow this structure:

    .
    └── App
        ├── CardForm
        └── CardList
            └── Card

Both the `Card` and `CardForm` components use state, which means that we need to [lift our state up](https://react.dev/learn/sharing-state-between-components) to the closest common parent component. In this case, that means the `App` component.

Our task is to change which card is active by using a property stored in state. The value of this property will help determine whether or not each card gets the active styling or not. We need to create an event handler that updates our state to do this.

We have to create an event handler function that updates the state in the same component that the state is defined in; in our case, this is the `App` component. But we need to invoke this event handler function in the `Card` component when a card is clicked. To do this, we create the event handler in our `App` component and pass it down to `Card` via props. From the table above, we'll pass our handler from `App`, to `CardList`, and finally, `Card`.

5.  Create a function called `changeActiveCard` that we'll use to modify the `activeCard` state which will subsequently update the styles of the card which was most recently clicked. Have your function accept one parameter, the card's id, and use this to set the state value `activeCard` to this id.
6.  Pass the `activeCard` value from state and `changeActiveCard` function to the `CardList` component as props.
7.  Pass the `id` of the card and the `changeActiveCard` function from `CardList` props to the `Card` component as props.
8.  Create a new prop for `Card` called `isActive` that checks if the `activeCard` is the same as the `id` for the current card in the loop. If it is, pass the value `true`, if not, pass the value `false`.
9.  Within your `Card` component, create a conditional statement within the className for the parent container (`.card`): if the value of the `isActive` prop is true, add a modifier class `card--active`. If it is false, do nothing.
10. Within the `clickHandler` for the `Card` component, invoke the `changeActiveCard` function passed in through props. Make sure to pass the card's id as an argument to the function.

11. In your `App.scss` file, add some styles for the `.card--active` class you created. Try adding a border color.

12. When you click on a card, the border should change color. In addition, the border should switch to the most recently clicked card when you click on a different card.

## Additional Resources

- [React State Quick Start](https://react.dev/learn#updating-the-screen)
- [Sharing Data Between Components](https://react.dev/learn#sharing-data-between-components)
- [Conditional Rendering Quick Start](https://react.dev/learn#conditional-rendering)

### Diving Deeper

- [When to Use State](https://react.dev/learn/state-a-components-memory)
