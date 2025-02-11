import "./App.scss";

// 0. SETUP:
import { useState } from "react";
import Header from "./components/Header";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";

function App() {
  /*  Storing Data in State
  Storing Data in State Q1. Modify the App component to store an array of card contents (you can find the existing array in the CardList component) as a state of the App component. Name the state variable cardContent and the update function setCardContent. */
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

  return (
    <>
      <Header logo="BrainStation" />
      <CardForm />
      <CardList cardContent={cardContent} />
    </>
  );
}

export default App;
