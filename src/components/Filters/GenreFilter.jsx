
function GenreFilter({changeGenreFilter}){

    const handleChange= (e)=>{
        changeGenreFilter(e.target.value);
    }  


    return(
        <form>
            <select name="genreFilter" onChange={handleChange}>
                <option value="">Filtrar Libros</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Terror">Terror</option>
                <option value="Zombies">Zombies</option>
            </select>
        </form>
    )
}

export default GenreFilter