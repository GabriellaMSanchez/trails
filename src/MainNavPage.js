import NavButton from './NavButton';
import SearchBar from './SearchBar'

function MainNavPage() { 
 
    return (
        <div>
            <h1>Trail Finder</h1>
            <h4>Today: {new Date().toLocaleDateString()}</h4>
            
            <SearchBar />
            
            <ul>
                <NavButton  
                    iconName="fa-solid fa-location-dot" 
                    text="Map of all Parks"
                />
                <NavButton 
                    iconName="fa-solid fa-circle-info"
                    text="General Info"
                />
                <NavButton 
                    iconName="fa-solid fa-bullhorn"
                    text="Park Announcements"
                />
                <NavButton 
                    iconName="fa-regular fa-calendar-days"
                    text="Calendar Events"
                />
                <NavButton
                    iconName="fa-solid fa-bag-shopping"
                    text="Link to shops that support NPS"
                />
                <NavButton 
                    iconName="fa-solid fa-dice"
                    text="Random Park"
                />
            </ul>
            <footer>“Within National Parks is room — glorious room — room in which to find ourselves, in which to think and hope, to dream and plan, to rest and resolve.”
— Enos Mills
</footer>
        </div>
    );
}

export default MainNavPage;
