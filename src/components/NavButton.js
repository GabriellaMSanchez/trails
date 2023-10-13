import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';

function NavButton({ iconName, text }) {

    return ( 
        <Button className= "main-nav-button">
            <FontAwesomeIcon className="nav-button-img" icon={iconName}/>
            <div className="nav-button-text">
                {text}
            </div>
        </Button>
    );
}

export default NavButton;
