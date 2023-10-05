import "./addButton.css";

function AddButton ({id, addFunction}){

    const handleClick=()=>{
        addFunction(id);
    }
    

    return(
        <button className="add-button" onClick={handleClick}><span className="material-symbols-outlined">add</span></button>
    )
}

export default AddButton