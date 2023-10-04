import { useState, useEffect } from "react";
import AvailableBooksContainer from "./components/availableBooksContainer/AvailableBooksContainer";

function App() {

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
    <div>
      <h1>Library's Name</h1>
      <AvailableBooksContainer bookArray={listBooks}/>
    </div>

  )


}

export default App
