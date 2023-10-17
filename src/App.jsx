import { useState, useEffect } from "react";
import AvailableBooksContainer from "./components/availableBooksContainer/AvailableBooksContainer";
import ReadingListContainer from "./components/readingListContainer/ReadingListContainer";
import GenreFilter from "./components/Filters/GenreFilter";
import PagesFilter from "./components/Filters/PagesFilter";

import "./App.css";


function App() {

  // Creo los estados que necesito
  // Datos del JSON
  const [listBooks, setListBooks] = useState([]);

  // Libros disponibles
  const [availableBooks, setAvailableBooks] = useState([]);

  // Lista de lecturas
  const [readingList, setReadingList] = useState([]);

  // Filtros
  const [filteredGenre, setFilteredGenre] = useState('');
  const [filteredPages, setFilteredPages] = useState(0);



  // Hago llamada al JSON dentro de useEffect para que no se renderice constatemente el comp. 
  useEffect(() => {
    fetch("/asyncMock/books.json")
      .then(res => res.json())
      .then(data => {
        // console.log(data.library);
        setListBooks(data.library);


        if (!storageReadingList) {
          setAvailableBooks(data.library)
        } else {
          setReadingList(storageReadingList);
          const refreshAvailableBooks = data.library.filter(item => {
            return !storageReadingList.some(itemStorage => itemStorage.book.title === item.book.title);
          })
          console.log(refreshAvailableBooks)
          setAvailableBooks(refreshAvailableBooks);
        }
      })

  }, []);

  // STORAGE
  const storageReadingList = JSON.parse(localStorage.getItem('Reading List'));

  // Seteo los disponibles y la lista de lectura en el storage
  if (!storageReadingList) {
    localStorage.setItem('Reading List', JSON.stringify(readingList));
  }
  localStorage.setItem('Available List', JSON.stringify(availableBooks));


  // Funciones Callback de los filtros
  const changeGenreFilter = (genre) => {
    setFilteredGenre(genre)
  }

  const changePagesFilter = (pages) => {
    setFilteredPages(pages);
  }

  // Funcionamiento de los filtros
  useEffect(() => {

    if (filteredPages > 200 && readingList.length < 1) {
      const filteredBooksByPages = listBooks.filter(item => item.book.pages >= filteredPages);
      setAvailableBooks(filteredBooksByPages);
    } else if (filteredGenre !== '' && readingList.length < 1) {
      const filteredBooksByGenre = listBooks.filter(item => item.book.genre === filteredGenre);
      setAvailableBooks(filteredBooksByGenre);
    } else if (filteredPages > 200 && readingList.length > 0) {
      const filteredBooksByPages = availableBooks.filter(item => item.book.pages >= filteredPages);
      setAvailableBooks(filteredBooksByPages);
    } else if (filteredGenre !== '' && readingList.length > 0) {
      const filteredBooksByGenre = availableBooks.filter(item => item.book.genre === filteredGenre);
      setAvailableBooks(filteredBooksByGenre);
    } else {
      setAvailableBooks(listBooks);
    }

  }, [filteredGenre, filteredPages]);

  const cleanFilters = () => {
    setFilteredPages(0);
    setFilteredGenre('');
  }


  // Esta función se ejecuta en el componente addButton
  const addFunction = (id) => {

    

    // Encuentro el libro que voy a leer por nombre
    const readingBook = availableBooks.find(item => item.book.title === id);
    console.log("Este libro elegiste", readingBook);

    // Creo copia del arreglo de readingList y luego lo actualizo con el nuevo libro
    const actualizatedReadingList = [...JSON.parse(localStorage.getItem('Reading List'))];
    actualizatedReadingList.push(readingBook);
    console.log(actualizatedReadingList);
    setReadingList(actualizatedReadingList);
    localStorage.setItem('Reading List', JSON.stringify(actualizatedReadingList));

    // Actualizo los libros disponibles sacando el que esta en lista de lectura
    const actualizatedList = availableBooks.filter((item) => item.book.title != id);
    console.log("Lista actualizada", actualizatedList);
    setAvailableBooks(actualizatedList);
    localStorage.setItem('Available List', JSON.stringify(actualizatedList));

  }


  // Esta funcion se ejecuta en el componente removeButton
  const removeFunction = (id) => {

    // Tomo el libro que quiero sacar
    const removedBook = readingList.find(item => item.book.title === id);
    console.log("Este libro queres remover", removedBook);

    // Actualizo los libros que se mantienen en la lista de lectura
    const actualizatedReadingList = readingList.filter(item => item.book.title !== id);
    setReadingList(actualizatedReadingList);
    localStorage.setItem('Reading List', JSON.stringify(actualizatedReadingList));

    // Actualizo los libros que vuelven a la lista de disponibles
    const actualizatedList = [...availableBooks];
    actualizatedList.push(removedBook);
    setAvailableBooks(actualizatedList);
    localStorage.setItem('Available List', JSON.stringify(actualizatedList));

  }

  return (
    <div>
      <h1 className="title">Tus lecturas</h1>
      <section className="filter-container">
        <PagesFilter changePages={changePagesFilter} />
        <GenreFilter changeGenreFilter={changeGenreFilter} />
        <button className="clear-filters-button" onClick={cleanFilters}>Limpiar filtros</button>
      </section>
      <section className="books-containers">
        <AvailableBooksContainer bookArray={availableBooks} addFunction={addFunction} />
        <ReadingListContainer booksArray={readingList} removeFunction={removeFunction} />
      </section>
    </div>

  )


}

export default App
