import axios from 'axios';

const searchParks = async () => {
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
