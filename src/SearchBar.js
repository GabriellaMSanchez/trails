
function SearchBar() {
    return (
        <input className="search-bar"
        type="text" 
        placeholder="Search a Park"
        style= {{
            height: "100%",
            width: "100%",
            paddingLeft: "8px"
        }}
        autoFocus
        spellCheck
        />
    )
}

export default SearchBar;
