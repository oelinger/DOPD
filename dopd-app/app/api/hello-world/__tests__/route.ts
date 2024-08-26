import { GET } from '../route';

describe('GET', () => {
    it('should return a response with a status of 200', async () => {
        const response = await GET();
        expect(response.status).toBe(200);
    });
});
