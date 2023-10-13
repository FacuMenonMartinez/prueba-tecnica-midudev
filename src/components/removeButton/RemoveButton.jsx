import "../addButton/addButton.css";

function RemoveButton ({removeFunction,changeFade, id}){

    const handleClick = ()=>{
        changeFade('fadeOut');
       setTimeout(()=>{
        removeFunction(id);
       },800) 
    }
    
    return(
        <button className="add-button" onClick={handleClick}><span className="material-symbols-outlined">remove</span></button>
    )
}

export default RemoveButton