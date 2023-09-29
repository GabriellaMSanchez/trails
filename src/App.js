function App() {
    return (
        <div>
            <h1>Trail Finder</h1>
            <h4>{new Date().toLocaleDateString()}</h4>
            <textarea
                type="text" 
                placeholder="Search a Park"
                style={{border: '3px solid black'}}
                autoFocus
                spellCheck
            />
            <ul>
                <li>Map of all Parks</li>
                <li>General Info</li>
                <li>Park Announcements</li>
                <li>Calendar Events</li>
                <li>Random Park</li>
            </ul>
        </div>
    );
}

export default App;