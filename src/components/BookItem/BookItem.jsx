import { useEffect, useState } from "react";
import AddButton from "../addButton/AddButton";
import RemoveButton from "../removeButton/RemoveButton";

import "./bookItem.css";

function BookItem({title, cover, author, genre, pages, addFunction, removeFunction, container}) {

    const [stateButton, setStateButton] = useState('');

    useEffect(()=>{
        setStateButton(container);

    },[])

    return (
        <article className="book-item">
            <h4 className="book-title">{title}</h4>
            <img className="book-image" src={cover} alt={`Imagen de portada de ${title}`} />
            <div className="book-facts">
                <p><b>Autor:</b> {author} </p>
                <p><b>Género:</b> {genre} </p>
                <p><b>Cantidad de páginas:</b> {pages}</p>
            </div>
            {stateButton === 'available'
            ?<AddButton addFunction={addFunction} id={title}/>
            :<RemoveButton removeFunction={removeFunction} id={title} />}
            

        </article>
    )
}

export default BookItem