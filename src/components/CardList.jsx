import Card from "./Card";

// 1.3 Modify the CardList component to use the array from props rather than the one stored locally.
function CardList({ cardContent, activeCard, changeActiveCard }) {
  /*
    let cardContent = [
        {
            title: 'First Card',
            content: 'First card content'
        },
        {
            title: 'Second Card',
            content: 'Second card content'
        }
    ];
    */
  return (
    <section className="card-list">
      {cardContent.map((content /*index*/) => (
        <Card
          // 3.4 Active Card - add ID
          key={content.id} // Changed from index
          title={content.title}
          content={content.content}
          // 3.7 Pass the id of the card and the changeActiveCard function from CardList props to the Card component as props.
          id={content.id}
          changeActiveCard={changeActiveCard}
          // 3.8 Create a new prop for Card called isActive that checks if the activeCard is the same as the id for the current card in the loop. If it is, pass the value true, if not, pass the value false.
          isActive={activeCard === content.id}
        />
      ))}
    </section>
  );
}

export default CardList;
