import { PLAYERS } from '../utils/constant';
import requests from "../requests/sendToPlayer";

const gameService = {};
gameService.play = async (playerNumber, number) => {
    try {
        let responseBack = {};
        const minusOne = -1;
        const zero = 0;
        const plusOne = +1;

        console.log('');
        console.log('-------------------------');
        console.log("Player: ", playerNumber, ", Number: ", number);
        console.log('');
        const minused1 = ((parseInt(number) + parseInt(minusOne)) % 3);
        const addedZero = ((parseInt(number) + parseInt(zero)) % 3);
        const addedOne = ((parseInt(number) + parseInt(plusOne)) % 3);

        if (!minused1) {
            responseBack.addedNumber = minusOne;
            responseBack.resultingNumber = ((parseInt(number) + parseInt(minusOne)) / 3);
        } else if (!addedZero) {
            responseBack.addedNumber = zero;
            responseBack.resultingNumber = ((parseInt(number) + parseInt(zero)) / 3);
        } else if (!addedOne) {
            responseBack.addedNumber = plusOne;
            responseBack.resultingNumber = ((parseInt(number) + parseInt(plusOne)) / 3);
        }

        if (responseBack.resultingNumber == 1) {
            console.log("MATCH WON");
            console.log('');
        } else {
            if (responseBack.resultingNumber && playerNumber == PLAYERS.PLAYER_1) {
                requests.sendNumberToPlayer2(responseBack.resultingNumber);
            } else if (responseBack.resultingNumber && playerNumber == PLAYERS.PLAYER_2) {
                requests.sendNumberToPlayer1(responseBack.resultingNumber);
            }
        }

        return responseBack;
    } catch (error) {
        throw error;
    }
}

gameService.randomIntFromInterval = () => {
    return Math.floor(Math.random() * (100 - 3 + 1) + 3)
}

gameService.start = async () => {
    try {
        console.log('MATCH STARTRED.');
        const number = gameService.randomIntFromInterval();
        await requests.sendNumberToPlayer1(number);

        return number;
    } catch (error) {
        throw error;
    }
}

export default gameService;


