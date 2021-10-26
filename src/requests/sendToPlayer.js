import Axios from 'axios';
import { APPLICATION } from '../utils/constant';
const requests = {};
requests.sendNumberToPlayer1 = async (number) => {
    try {
        const response = await Axios.get(`${APPLICATION.URL}/player1?number=${number}`);
        console.log(response.data);
    } catch (error) {
        throw error;
    }
}

requests.sendNumberToPlayer2 = async (number) => {
    try {
        const response = await Axios.get(`${APPLICATION.URL}/player2?number=${number}`);
        console.log(response.data);

    } catch (error) {
        throw error;
    }
}

export default requests;