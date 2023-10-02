import NavButton from "./NavButton";
import SearchBar from "./SearchBar";

function MainNavPage() {
  return (
    <div className="main-nav-page">
        <div className="search-bar-container">
            <div className="float-right">
                <SearchBar />
            </div>
        </div>
        <div className="text-center"> 
            <h1>Trail Finder</h1>
            <h4>Today: {new Date().toLocaleDateString()}</h4>
        </div>

      <div className="text-center">
        <ul>
          <NavButton
            iconName="fa-solid fa-location-dot"
            text="Map of all Parks"
          />
          <NavButton 
            iconName="fa-solid fa-circle-info" 
            text="General Info" />
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
            text="Partnered Shops"
          />
          <NavButton 
            iconName="fa-solid fa-dice" 
            text="Random Park" />
        </ul>
      </div>
      <footer className="main-nav-footer text-center">
        <p>
            “Within National Parks is room — glorious room — room in which to find
            ourselves, in which to think and hope, to dream and plan, to rest and
            resolve.” — Enos Mills
        </p>

      </footer>
    </div>
  );
}

export default MainNavPage;
