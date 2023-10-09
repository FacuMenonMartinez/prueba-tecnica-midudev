import { useState, useEffect } from "react";
import AvailableBooksContainer from "./components/availableBooksContainer/AvailableBooksContainer";
import ReadingListContainer from "./components/readingListContainer/ReadingListContainer";
import GenreFilter from "./components/Filters/GenreFilter";
import PagesFilter from "./components/Filters/PagesFilter";


function App() {

  // Creo un estado donde guardo los libros traidos del JSON
  // es la que voy a usar para el renderizado de disponibles
  const [listBooks, setListBooks] = useState([]);

  // Creo el estado donde guardo la lista de lectura
  const [readingList, setReadingList] = useState([]);

  const [filteredGenre, setFilteredGenre] = useState('');


  // Hago llamada al JSON dentro de useEffect para que no se renderice constatemente el comp. 
  useEffect(() => {
    fetch("../../../public/asyncMock/books.json")
      .then(res => res.json())
      .then(data => {
        console.log(data.library)

        // Uso el filtro aca para que, en caso que quiera, el cliente puede sacar todos los filtros
        if (filteredGenre !== '') {
          const filteredBooks = data.library.filter(item => item.book.genre === filteredGenre);
          setListBooks(filteredBooks);
        } else {
          setListBooks(data.library);
        }

      })
  }, [filteredGenre]);

  const changeGenreFilter = (genre) => {
    setFilteredGenre(genre)
  }





  // Esta función se ejecuta en el componente addButton
  const addFunction = (id) => {

    // Encuentro el libro que voy a leer por nombre
    const readingBook = listBooks.find(item => item.book.title === id);
    console.log("Este libro elegiste", readingBook);

    // Creo copia del arreglo de readingList y luego lo actualizo con el nuevo libro
    const actualizatedReadingList = [...readingList];
    actualizatedReadingList.push(readingBook);
    setReadingList(actualizatedReadingList);

    // Actualizo los libros disponibles sacando el que esta en lista de lectura
    const actualizatedList = listBooks.filter((item) => item.book.title != id);
    console.log("Lista actualizada", actualizatedList);
    setListBooks(actualizatedList);

  }


  // Esta funcion se ejecuta en el componente removeButton
  const removeFunction = (id) => {

    // Tomo el libro que quiero sacar
    const removedBook = readingList.find(item => item.book.title === id);
    console.log("Este libro queres remover", removedBook);

    // Actualizo los libros que vuelven a la lista de disponibles
    const actualizatedList = [...listBooks];
    actualizatedList.push(removedBook);
    setListBooks(actualizatedList);

    // Actualizo los libros que se mantienen en la lista de lectura
    const actualizatedReadingList = readingList.filter(item => item.book.title !== id);
    setReadingList(actualizatedReadingList);

  }


  return (
    <div>
      <h1>Library's Name</h1>
      <PagesFilter/>
      <GenreFilter changeGenreFilter={changeGenreFilter} />
      <AvailableBooksContainer bookArray={listBooks} addFunction={addFunction} />
      <ReadingListContainer booksArray={readingList} removeFunction={removeFunction} />
    </div>

  )


}

export default App
