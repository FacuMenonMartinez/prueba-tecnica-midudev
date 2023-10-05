import "../addButton/addButton.css";

function RemoveButton ({removeFunction, id}){

    const handleClick =()=>{
        removeFunction(id)
    }
    
    return(
        <button className="add-button" onClick={handleClick}><span className="material-symbols-outlined">remove</span></button>
    )
}

export default RemoveButton