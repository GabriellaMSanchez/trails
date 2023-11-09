import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
        setTerm('');
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input className="search-bar"
                        type="text" 
                        placeholder="Search a Park"
                        autoFocus
                        spellCheck
                        onChange={handleChange}
                        value = {term}
                    />
        </form>
    );
}

export default SearchBar;
