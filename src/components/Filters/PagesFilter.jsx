import { useState } from "react";

function PagesFilter({changePages}) {

    const [pages, setPages] = useState(200);

    const handleChange = (e) => {
       setPages(e.target.value);
       changePages(e.target.value);
    }

    return (<form>
        <input onChange={handleChange} type="range" min={200} max={1200} step={100} list="tickmarks" />
        <label>Más de {pages} páginas</label>
    </form>)
}

export default PagesFilter