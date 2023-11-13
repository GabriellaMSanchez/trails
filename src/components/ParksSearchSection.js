import { useEffect, useContext } from 'react';
import ParksContext from '../context/parks';

// parent component to SearchBar and ParksSearchSection to hold state of what is being searched.
// componentDidMount() {
//     api call to populate this.state.parks
// this.setState(parksObject) -> look at syntax
// }

// const parkNames = response.data.data.map((parkInfo) => parkInfo.fullName);

function ParksSearchSection() {
    console.log("entering")

    const { fetchParks } = useContext(ParksContext);
        
    useEffect(() => {
        fetchParks();
    }, []);

};

export default ParksSearchSection;
