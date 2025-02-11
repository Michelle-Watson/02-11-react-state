import "./App.scss";

// 0. SETUP:
import { useState } from "react";
import Header from "./components/Header";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";

function App() {
  /* 
  PART 1: Storing Data in State
  1.1 Storing Data in State Q1. Modify the App component to store an array of card contents (you can find the existing array in the CardList component) as a state of the App component. Name the state variable cardContent and the update function setCardContent. 
  */
  // Slide 10: Initializing State
  // useState = Hook with initial value within the {}

  const [cardContent, setCardContent] = useState([
    {
      title: "First Card",
      content: "First card content",
    },
    {
      title: "Second Card",
      content: "Second card content",
    },
  ]);

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  /*
  PART 2: Changing Data in State
  Now that we have the cards in state, let’s add a feature to allow users to add new cards. To achieve this, we will use our CardForm component to alter the card content array by adding a new item to the list.
  */

  // 2.1. Create a function in the App component called addCard that adds a new object to the content array (with key/values for title and content); you will need to use setCardContent() to do this. The addCard function should have parameters for title and content which will be used as the values of the new object. */
  // Slide 14: Changing State
  // Note that you should never mutate state directly which is why we need to use setCardContent() and not cardContent = [/* newValues */]. For adding a new element to an array immutably, you can create a new array and use the spread ... syntax.

  const addCard = (title, content) => {
    const newCard = { title, content };
    // Updating Array or Object State Values (Slide 18)
    setCardContent([...cardContent, newCard]);
  };

  return (
    <>
      <Header logo="BrainStation" />
      {/* 2.2 Pass the addCard function to the CardForm component using props. */}
      <CardForm addCard={addCard} />
      {/* 1.2 Pass the array stored in the cardContent state variable to the CardList component using props. */}
      <CardList cardContent={cardContent} />
    </>
  );
}

export default App;
