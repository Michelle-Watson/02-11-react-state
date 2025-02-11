function CardForm({ addCard }) {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.title.value, event.target.content.value);

    // 2.3 In the submitHandler function in the CardForm component, invoke your addCard function from your App component that you passed in as props. Make sure to pass the form input values for title and content as arguments to the addCard function.
    const title = event.target.title.value;
    const content = event.target.content.value;

    addCard(title, content);

    // Clear the input fields
    event.target.title.value = "";
    event.target.content.value = "";
  };

  return (
    <>
      <form className="card-form" onSubmit={submitHandler}>
        <label className="card-form__title" htmlFor="title">
          Title:
        </label>
        <input name="title" id="title" />
        <label className="card-form__content" htmlFor="content">
          Content:
        </label>
        <input name="content" id="content" />
        <button>Submit</button>
      </form>
    </>
  );
}

export default CardForm;
