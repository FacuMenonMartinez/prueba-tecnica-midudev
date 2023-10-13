import "./filters.css";

function GenreFilter({changeGenreFilter}){

    const handleChange= (e)=>{
        changeGenreFilter(e.target.value);
        
    }  


    return(
        <form>
            <select className="genre-filter" name="genreFilter" onChange={handleChange}>
                <option className="genre-options" value="">Todos</option>
                <option className="genre-options" value="Ciencia ficción">Ciencia ficción</option>
                <option className="genre-options" value="Fantasía">Fantasía</option>
                <option className="genre-options" value="Terror">Terror</option>
                <option className="genre-options" value="Zombies">Zombies</option>
            </select>
        </form>
    )
}

export default GenreFilter