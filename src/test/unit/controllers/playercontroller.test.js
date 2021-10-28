import httpMocks from 'node-mocks-http';
import gameService from '../../../services/game';
import gameFixture from '../../fixtures/game';
import playerController from '../../../controllers/playercontroller';

describe('Player controller', () => {
    const functions = Object.keys(playerController);

    test('It should contain all functions', async () => {
        expect(functions).toContain('start');
        expect(functions).toContain('gamePlayedByPlayer1');
        expect(functions).toContain('gamePlayedByPlayer2');
    });

    test("Should return 200 success status code with correct number returned.", async () => {
        const res = httpMocks.createResponse();
        const req = httpMocks.createRequest({
            method: "GET",
            url: "/api/start"
        });

        const gameResponse = jest.spyOn(gameService, 'start');
        const mockedNumber = gameFixture.returnGameResponse();
        gameResponse.mockReturnValue(mockedNumber);

        const result = await playerController.start(req, res);
        const data = res._getJSONData();

        expect(data.status).toBe(200);
        expect(data.body.number).toBe(6)
        expect(result.statusCode).toBe(200);
        gameResponse.mockRestore();
    });
});