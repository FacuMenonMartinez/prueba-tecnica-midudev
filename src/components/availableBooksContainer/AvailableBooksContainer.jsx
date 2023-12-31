import { useState, useEffect } from "react";

import BookItem from "../BookItem/BookItem";
import "./availableBooksContainer.css";

function AvailableBooksContainer({ bookArray, addFunction }) {

    return (
        <section className="available-books-container">
            <h2 className="books-container-title">Libros disponibles</h2>
            <p>{bookArray.length} libros disponibles</p>
            <div className="books-container">
                {/* Hago map para renderizar los libros en un componente.
                    Fijarse desestructurar el objeto para que quede un codigo mas prolijo */}
                {bookArray.length > 0
                    ? (bookArray.map(item => {
                        return <BookItem container={'available'} title={item.book.title} cover={item.book.cover} pages={item.book.pages} genre={item.book.genre} author={item.book.author.name} key={item.book.ISBN} addFunction={addFunction} />
                    }))
                    : <h3>Libros no encontrados</h3>

                }

            </div>
        </section>
    )
}

export default AvailableBooksContainer