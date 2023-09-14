import "./SearchBar";
import { useState } from "react";

function SearchBar({ onSubmit }) {
    const[value, setValue] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(value);
    };

    // update any changes in input-Box
    const handleChange = (event) => {
        setValue(event.target.value);
        // setTerm(event.target.value.replace(/[a-z]/, ''));
    }

    return (
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter SearchTerm</label>
            <input value={value} onChange={handleChange}/>
            <br/>
            {/* {term.length < 6 && 'Term must be langer'} */}
        </form>
    </div>
    )
}

export default SearchBar;