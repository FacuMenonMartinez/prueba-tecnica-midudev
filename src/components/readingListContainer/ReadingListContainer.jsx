import BookItem from "../BookItem/BookItem";
import "../availableBooksContainer/availableBooksContainer.css";

function ReadingListContainer ({booksArray, removeFunction}){


    return(
        <section className="section-books-container">
            <h2 className="books-container-title">Books Container</h2>
            <p>{booksArray.length} books on list</p>
            <div className="books-container">
                {/* Hago map para renderizar los libros en un componente.
                    Fijarse desestructurar el objeto para que quede un codigo mas prolijo */}
                {booksArray.length > 0
                    ? (booksArray.map(item => {
                        return <BookItem title={item.book.title} cover={item.book.cover} pages={item.book.pages} genre={item.book.genre} author={item.book.author.name} removeFunction={removeFunction} key={item.book.ISBN}/>
                    }))
                    : <h3>Aún no hay libros en tu lista</h3>

                }

            </div>
        </section>
    )
}

export default ReadingListContainer