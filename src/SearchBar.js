
function SearchBar() {
    return (
        <input
        type="text" 
        placeholder="Search a Park"
        style={{border: '3px solid black'}}
        autoFocus
        spellCheck
    />
    )
}

export default SearchBar;