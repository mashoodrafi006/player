import Axios from 'axios';
import config from '../config';

const requests = {};

/** 
 * @param number
 * @description Accepts number and pass to player 1.
 */
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

/** 
 * @param number
 * @description Accepts number and pass to player 2.
 */
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