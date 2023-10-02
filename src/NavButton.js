import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';

function NavButton({ iconName, text }) {

    return ( 
        <div>
            <Button className="main-nav-button" variant="dark">
                <FontAwesomeIcon className="nav-button-img" icon={iconName}/>
                <div className="nav-button-text">
                    {text}
                </div>
            </Button>
        </div>
    );
}

export default NavButton;
