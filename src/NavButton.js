import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavButton({ iconName, text }) {

    return ( 
        <div>
            <FontAwesomeIcon icon={iconName}/>
            {text}
        </div>
    );
}

export default NavButton;
