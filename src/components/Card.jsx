function Card({ title, content }) {
    const clickHandler = () => {
        console.log(title, content)
    }

    return (
        <div 
            className="card" 
            onClick={clickHandler}
        >
            <div className="card__content">
                {content}
            </div>
            <h4 className="card__title">
                {title}
            </h4>
        </div>
    );
}

export default Card;