import { useContext } from "react";
import ParksContext from "../context/parks";
import SearchBar from "./SearchBar";

// This component will be mounted when someone types into searchBar
// It will show possible park matches

function ParksList() {
    const { parks } = useContext(ParksContext);
    // How to get term from searchbar submit?

    const renderedParks = parks.map((park) => {
        return (
            <div park={park}/>
        );
    });

    return <div>{renderedParks}</div>;
}

export default ParksList;
