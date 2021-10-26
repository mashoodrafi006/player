import logger from '../utils/logging';
import gameService from '../services/game';
import { CONTROLLER_ERROR } from '../utils/errors';
import { API_STATUS_CODES, RESPONSE_MESSAGES, PLAYERS } from '../utils/constant';

const playerController = {};

playerController.start = async (req, res) => {
    try {
        const number = await gameService.start();

        let response = {};
        response.status = API_STATUS_CODES.SUCCESS;
        response.message = RESPONSE_MESSAGES.SUCCESS;
        response.body = { number: number };

        return res.json(response);
    } catch (error) {
        logger.log({
            level: 'error',
            message: error.message,
        });
        res.json(CONTROLLER_ERROR)
    }
}

playerController.gamePlayedByPlayer1 = async (req, res) => {
    try {
        const { number } = req.query;
        const numberPlayedWith = await gameService.play(PLAYERS.PLAYER_1, number);

        let response = {};
        response.status = API_STATUS_CODES.SUCCESS;
        response.message = RESPONSE_MESSAGES.SUCCESS;
        response.body = numberPlayedWith;
        return res.json(response);
    } catch (error) {
        console.log(error);
        logger.log({
            level: 'error',
            message: error.message,
        });
        res.json(CONTROLLER_ERROR)
    }
}


playerController.gamePlayedByPlayer2 = async (req, res) => {
    try {
        const { number } = req.query;
        const numberPlayedWith = await gameService.play(PLAYERS.PLAYER_2, number);

        let response = {};
        response.status = API_STATUS_CODES.SUCCESS;
        response.message = RESPONSE_MESSAGES.SUCCESS;
        response.body = numberPlayedWith;
        return res.json(response);
    } catch (error) {
        console.log(error);
        logger.log({
            level: 'error',
            message: error.message,
        });
        res.json(CONTROLLER_ERROR)
    }
}

export default playerController;