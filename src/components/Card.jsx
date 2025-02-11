function Card({ title, content, id, changeActiveCard, isActive }) {
  const clickHandler = () => {
    console.log(title, content);

    // 3.10 Within the clickHandler for the Card component, invoke the changeActiveCard function passed in through props. Make sure to pass the card's id as an argument to the function.
    changeActiveCard(id);
  };

  // 3.9 Within your Card component, create a conditional statement within the className for the parent container (.card): if the value of the isActive prop is true, add a modifier class card--active. If it is false, do nothing.
  let cardClassName = "card"; // Default class name

  if (isActive) {
    cardClassName += " card--active";
  }

  return (
    <div className={cardClassName} onClick={clickHandler}>
      <div className="card__content">{content}</div>
      <h4 className="card__title">{title}</h4>
    </div>
  );
}

export default Card;
