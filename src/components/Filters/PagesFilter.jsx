import { useState } from "react";
import "./filters.css";

function PagesFilter({changePages}) {

    const [pages, setPages] = useState(200);

    const handleChange = (e) => {
       setPages(e.target.value);
       changePages(e.target.value);
    }

    return (<form className="pages-filter-container">
        <input className="pages-range" onChange={handleChange} type="range" min={200} max={1200} step={100} list="tickmarks" />
        <label className="pages-label">Más de {pages} páginas</label>
    </form>)
}

export default PagesFilter