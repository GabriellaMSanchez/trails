import { useState, useEffect } from 'react';
import axios from 'axios';

// parent component to SearchBar and ParksSearchSection to hold state of what is being searched.
// componentDidMount() {
//     api call to populate this.state.parks
// this.setState(parksObject) -> look at syntax
// }

// const parkNames = response.data.data.map((parkInfo) => parkInfo.fullName);

function ParksSearchSection() {
        
    const [parks, setParks] = useState([]);

    const fetchParks = async () => {

        const response = await axios.get('https://developer.nps.gov/api/v1/parks', {
            headers: {
                'X-Api-Key': process.env.REACT_APP_API_KEY
            },
            params: {
                limit: 500
            }
        });
        
        setParks(response.data.data)

    };

    useEffect(() => {
        fetchParks();
    }, []);

};

export default ParksSearchSection;
