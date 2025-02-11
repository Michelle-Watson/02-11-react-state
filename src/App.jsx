import "./App.scss";

// 0. SETUP:
import { useState } from "react";
import Header from "./components/Header";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";

//  3.2 iv ... from the uuid npm package.
import { v4 as uuidv4 } from "uuid";
// Example: uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {
  /* 
  PART 1: Storing Data in State
  1.1 Storing Data in State Q1. Modify the App component to store an array of card contents (you can find the existing array in the CardList component) as a state of the App component. Name the state variable cardContent and the update function setCardContent. 
  */
  // Slide 10: Initializing State
  // useState = Hook with initial value within the {}

  // 3.2i Modify the array of card content stored in the state to...
  const [cardContent, setCardContent] = useState([
    {
      title: "First Card",
      content: "First card content",
      // 3.2ii  ...include an id property in all card objects...
      id: uuidv4(),
    },
    {
      title: "Second Card",
      content: "Second card content",
      // 3.2iii The value of the id property should be a randomly generated id...
      id: uuidv4(),
    },
  ]);

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  /*
  PART 2: Changing Data in State
  Now that we have the cards in state, let’s add a feature to allow users to add new cards. To achieve this, we will use our CardForm component to alter the card content array by adding a new item to the list.
  */

  // 2.1. Create a function in the App component called addCard that adds a new object to the content array (with key/values for title and content); you will need to use setCardContent() to do this. The addCard function should have parameters for title and content which will be used as the values of the new object. [Slide 14: Changing State]*/
  // Note that you should never mutate state directly which is why we need to use setCardContent() and not cardContent = [/* newValues */]. For adding a new element to an array immutably, you can create a new array and use the spread ... syntax.

  const addCard = (title, content) => {
    // 3.3 Modify the addCard function to add an id to the new card object when updating the cardContent state variable. Again, the value of the id property should be a uuid.
    const newCard = { title, content, id: uuidv4() };
    // Updating Array or Object State Values (Slide 18)
    setCardContent([...cardContent, newCard]);
  };

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  /*
  PART 3 Diving Deeper: Active Card
  */

  // 3.1 In the App component, create a new state variable called activeCard and set it to null for the moment. We'll use this to store the id of the active card.
  const [activeCard, setActiveCard] = useState(null);

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
