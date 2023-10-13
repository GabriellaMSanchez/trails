import NavButton from "./NavButton";
import SearchBar from "./SearchBar";
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../styles/mainNavPage.css';
import { useState } from 'react';


function MainNavPage() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const handleSubmit = (term) => {
        console.log('Search a ', term);
    };

  return (
    <div className="main-nav-page">
        <Card className="main-nav-title-cards main-nav-text" style={{ background: "rgba(0, 0, 0, 0.5)"}}>
                <Card.Body>
                    <Card.Title className="text-center"> 
                        <h1>Trail Finder</h1>
                    </Card.Title>
                    <Card.Subtitle className="text-center mb-2 text-muted">
                        <p>
                            Find your next adventure. Number of clicks: {count}
                        </p>
                    </Card.Subtitle>
                    <Card.Subtitle className="text-center mb-2 text-muted">
                        <p>
                            Today: {new Date().toLocaleDateString()}
                        </p>
                    </Card.Subtitle>
                    <div
                        className="search-bar-container" 
                    >
                        <SearchBar onSubmit={handleSubmit}/>
                    </div>
                    <ButtonGroup 
                        vertical 
                        className="main-nav-button-grp text-center" 
                        onClick={handleClick}
                    >
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
                            text="NPS Partnered Shops"
                        />
                        <NavButton 
                            iconName="fa-solid fa-dice" 
                            text="Random Park"
                            />
                    </ButtonGroup>
                    <div id="nav-quote">
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
