import "./bookItemButtons.css";

function RemoveButton ({removeFunction,changeFade, id}){

    const handleClick = ()=>{
        changeFade('fadeOut');
       setTimeout(()=>{
        removeFunction(id);
       },800) 
    }
    
    return(
        <button className="remove-button" onClick={handleClick}><span className="material-symbols-outlined">remove</span></button>
    )
}

export default RemoveButton