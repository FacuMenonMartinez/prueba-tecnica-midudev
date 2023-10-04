import AddButton from "../addButton/AddButton";
import "./bookItem.css";

function BookItem({title, cover, author, genre, pages, id, addFunction}) {

    return (
        <article className="book-item">
            <h4 className="book-title">{title}</h4>
            <img className="book-image" src={cover} alt={`Imagen de portada de ${title}`} />
            <div className="book-facts" key={id}>
                <p><b>Autor:</b> {author} </p>
                <p><b>Género:</b> {genre} </p>
                <p><b>Cantidad de páginas:</b> {pages}</p>
            </div>
            <AddButton addFunction={addFunction} id={id}/>

        </article>
    )
}

export default BookItem