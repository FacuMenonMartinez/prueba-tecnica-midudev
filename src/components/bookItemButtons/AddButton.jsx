import "./bookItemButtons.css";

function AddButton ({id, addFunction, changeFade}){


    const handleClick=()=>{
        changeFade('fadeOut');
        setTimeout(()=>{
            addFunction(id);;
           },800) 
    }
    

    return(
        <button className="add-button" onClick={handleClick}><span className="material-symbols-outlined">add</span></button>
    )
}

export default AddButton