
function SearchBar({ onSubmit }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit('park!');
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <input className="search-bar"
                        type="text" 
                        placeholder="Search a Park"
                        autoFocus
                        spellCheck
                    />
        </form>
    )
}

export default SearchBar;
