import BookItem from "../BookItem/BookItem";
import "./readingListContainer.css";

function ReadingListContainer ({booksArray, removeFunction}){

    

    return(
        <section className="reading-list-container">
            <h2 className="books-container-title">Lista de lectura</h2>
            <p>{booksArray.length} libros en lista</p>
            <div className="books-container">
                {/* Hago map para renderizar los libros en un componente.
                    Fijarse desestructurar el objeto para que quede un codigo mas prolijo */}
                {booksArray.length > 0
                    ? (booksArray.map(item => {
                        return <BookItem title={item.book.title} cover={item.book.cover}  removeFunction={removeFunction} key={item.book.ISBN}/>
                    }))
                    : <h3>Aún no hay libros en tu lista</h3>

                }

            </div>
        </section>
    )
}

export default ReadingListContainer