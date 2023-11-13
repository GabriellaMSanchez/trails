import { createContext, useState } from "react";
import axios from "axios";

const ParksContext = createContext();

function Provider({ children }) {

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

    const valueToShare = {
        parks,
        fetchParks
    };
    return <ParksContext.Provider value={valueToShare}>
        {children}
    </ParksContext.Provider>
}

export { Provider }
export default ParksContext;
