import NavButton from "./NavButton";
import SearchBar from "./SearchBar";
import Card from 'react-bootstrap/Card';

function MainNavPage() {
  return (
    <div className="main-nav-page">
        <div className="search-bar-container">
            <div className="float-right">
                <SearchBar />
            </div>
        </div>

        <Card className="main-nav-title-cards main-nav-text" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
            <Card.Body>
                <Card.Title className="text-center"> 
                    <h1>Trail Finder</h1>
                </Card.Title>
                <Card.Subtitle className="text-center mb-2 text-muted">
                    <p>
                        Find your next adventure. 
                    </p>
                </Card.Subtitle>
                <Card.Subtitle className="text-center mb-2 text-muted">
                    <p>
                        Today: {new Date().toLocaleDateString()}
                    </p>
                </Card.Subtitle>      

                <Card.Text>
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
                </Card.Text>
                <div>
                    <Card.Text className="text-center">
                        “Within National Parks is room — glorious room — room in which to find
                        ourselves, in which to think and hope, to dream and plan, to rest and
                        resolve.” — Enos Mills
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>

      <footer className="main-nav-footer text-center">
        <p>
            Created 2023. 
        </p>
      </footer>
    </div>
  );
}

export default MainNavPage;
