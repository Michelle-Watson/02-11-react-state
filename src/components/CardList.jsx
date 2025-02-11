import Card from "./Card";

// 1.3 Modify the CardList component to use the array from props rather than the one stored locally.
function CardList({ cardContent }) {
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
      {cardContent.map((content, index) => (
        <Card key={index} title={content.title} content={content.content} />
      ))}
    </section>
  );
}

export default CardList;
