import Axios from 'axios';
import config from '../config';

const requests = {};
requests.sendNumberToPlayer1 = async (number) => {
    try {
        const response = await Axios.get(`${config.applicationUrl}/player1?number=${number}`);
        console.log("Response from player 1.");
        console.log(JSON.stringify(response.data));

        return response.data;
    } catch (error) {
        throw error;
    }
}

requests.sendNumberToPlayer2 = async (number) => {
    try {
        const response = await Axios.get(`${config.applicationUrl}/player2?number=${number}`);
        console.log("Response from player 2.");
        console.log(JSON.stringify(response.data));

        return response.data;
    } catch (error) {
        throw error;
    }
}

export default requests;