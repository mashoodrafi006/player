import express from 'express';
import playerController from '../controllers/playercontroller';
const router = express.Router({});

router.get('/start', playerController.start);
router.get('/player1', playerController.gamePlayedByPlayer1);
router.get("/player2", playerController.gamePlayedByPlayer2);

module.exports = router;
