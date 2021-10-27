import { PLAYERS, NUMBERS_RANGE, NUMBER_TO_DIVIDE } from '../utils/constant';
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
        const addedMinusOne = ((parseInt(number) + parseInt(minusOne)) % NUMBER_TO_DIVIDE);
        const addedZero = ((parseInt(number) + parseInt(zero)) % NUMBER_TO_DIVIDE);
        const addedOne = ((parseInt(number) + parseInt(plusOne)) % NUMBER_TO_DIVIDE);

        if (!addedMinusOne) {
            responseBack.addedNumber = minusOne;
            responseBack.resultingNumber = ((parseInt(number) + parseInt(minusOne)) / NUMBER_TO_DIVIDE);
        } else if (!addedZero) {
            responseBack.addedNumber = zero;
            responseBack.resultingNumber = ((parseInt(number) + parseInt(zero)) / NUMBER_TO_DIVIDE);
        } else if (!addedOne) {
            responseBack.addedNumber = plusOne;
            responseBack.resultingNumber = ((parseInt(number) + parseInt(plusOne)) / NUMBER_TO_DIVIDE);
        }

        if (responseBack.resultingNumber == 1) {
            console.log("MATCH WON");
            console.log('');
        } else {
            if (responseBack.resultingNumber && playerNumber == PLAYERS.PLAYER_1) {
                console.log("Passing number to player 2");
                requests.sendNumberToPlayer2(responseBack.resultingNumber);
            } else if (responseBack.resultingNumber && playerNumber == PLAYERS.PLAYER_2) {
                console.log("Passing number to player 1");
                requests.sendNumberToPlayer1(responseBack.resultingNumber);
            }
        }

        return responseBack;
    } catch (error) {
        throw error;
    }
}

/**
 * @description Return a random number from a given range.
*/
gameService.randomIntFromInterval = () => {
    return Math.floor(Math.random() * (NUMBERS_RANGE.MAX - NUMBERS_RANGE.MIN + 1) + NUMBERS_RANGE.MIN)
}

/**
 * @description Return a random number from a given range.
*/
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


