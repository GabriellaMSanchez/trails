import axios from 'axios';

const searchParks = async (term) => {

    // if we take in a term from the search bar
    // will need to map that name to either
    // the CSV file to get the park code to
    // make the API call. Or to look at the
    // park api cache.

    const response = await axios.get('https://developer.nps.gov/api/v1/parks', {
        headers: {
            'X-Api-Key': '',

        },
        params: {
            limit: 500,
        }
    });

    const parkNames = response.data.data.map((parkInfo) => parkInfo.fullName);
    console.log(response);
    return parkNames;
};

export default searchParks;
