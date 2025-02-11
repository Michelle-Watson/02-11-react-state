function CardForm() {
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event.target.title.value, event.target.content.value)
    }

    return (
        <>
            <form 
                className="card-form"
                onSubmit={submitHandler}>
                <label 
                    className="card-form__title" 
                    htmlFor="title">
                    Title:
                </label>
                <input 
                    name="title"
                    id="title"/>
                <label 
                    className="card-form__content" 
                    htmlFor="content">
                    Content:
                </label>
                <input 
                    name="content"
                    id="content"/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default CardForm
