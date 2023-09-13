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
    <div>
        <form onSubmit={handleFormSubmit}>
            <input value={value} onChange={handleChange}/>
            <br/>
            {/* {term.length < 6 && 'Term must be langer'} */}
        </form>
    </div>
    )
}

export default SearchBar;