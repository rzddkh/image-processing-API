import supertest from 'supertest';
import app from '../../index';
/**
 * testing suite for server and endpoint connections
 */
const request = supertest(app);

describe('testing suite for server', () => {
  // testing / endpoint for server to see if server at '/' connected

  it('testing "/" endpoint to see if we are connected to server. \n Should return status 200', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  // testing /resize endpoint functionality for matteo-badini picture and resizing it to width of 1000 and height of 500

  it('testing "/resize" functionality if we get an image back. \n Response type should be "image/jpeg"', async () => {
    const response = await request.get(
      '/resize?filename=matteo-badini&width=1000&height=500'
    );
    expect(response.type).toBe('image/jpeg');
  });

  it('testing "/resize" end point to fail with bad input. \n We should get text (error message) instead of image as response type', async () => {
    const response = await request.get(
      '/resize?filename=matteobadini&width=1000&height=500'
    );
    expect(response.type).toBe('text/html');
  });
});
