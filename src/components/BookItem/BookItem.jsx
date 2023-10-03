function BookItem({title, cover, author, genre, pages, id}) {

    return (
        <article>
            <h4>{title}</h4>
            <img src={cover} alt={`Imagen de portada de ${title}`} />
            <div key={id}>
                <p>Autor: {author} </p>
                <p>Género: {genre} </p>
                <p>Cantidad de páginas: {pages}</p>
            </div>

        </article>
    )
}

export default BookItem