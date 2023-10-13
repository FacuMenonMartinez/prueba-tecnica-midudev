import { useEffect, useState } from "react";
import AddButton from "../addButton/AddButton";
import RemoveButton from "../removeButton/RemoveButton";

import "./bookItem.css";

function BookItem({ title, cover, author, genre, addFunction, removeFunction, container }) {

    const [stateButton, setStateButton] = useState('');
    const [stateFade, setStateFade] = useState('fadeIn');

    useEffect(() => {
        setStateButton(container);

    }, [])

    const setFadeOut = (newState) =>{
        setStateFade(newState);
    }

    if(stateFade !=''){
        console.log(stateFade);
    }

    return (
        <article className={`book-item ${stateFade}`}>
            <h4 className="book-title">{title}</h4>
            <img className="book-image" src={cover} alt={`Imagen de portada de ${title}`} />
            {(author && genre
                ? <div className="book-facts">
                    <p><b>Autor:</b> {author} </p>
                    <p><b>Género:</b> {genre} </p>
                </div>
                : <div className="book-facts"></div>)}
            {stateButton === 'available'
                ? <AddButton addFunction={addFunction} changeFade={setFadeOut} id={title} />
                : <RemoveButton removeFunction={removeFunction} changeFade={setFadeOut} id={title} />}
        </article>
    )
}

export default BookItem