import { useState, useEffect } from "react";

import BookItem from "../BookItem/BookItem";

function AvailableBooksContainer() {

    // Creo un estado donde guardo los libros traidos del JSON
    const [listBooks, setListBooks] = useState([]);

    // Hago llamada al JSON dentro de useEffect para que no se renderice constatemente el comp. 
    useEffect(() => {
        fetch("../../../public/asyncMock/books.json")
            .then(res => res.json())
            .then(data => {
                setListBooks(data.library);
            })
    }, []);




    return (
        <section>
            <h2>Books Container</h2>
            <div className="books-container">
                {/* Hago map para renderizar los libros en un componente.
                    Fijarse desestructurar el objeto para que quede un codigo mas prolijo */}
                {listBooks.length > 0
                    ? (listBooks.map(item => {
                        return <BookItem title={item.book.title} cover={item.book.cover} pages={item.book.pages} genre={item.book.genre} author={item.book.author.name} key={item.book.ISBN} />
                    }))
                    : <h3>Libros no encontrados</h3>

                }

            </div>
        </section>
    )
}

export default AvailableBooksContainer