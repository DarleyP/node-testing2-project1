const request = require('supertest')
const db = require('../data/dbConfig')
const server = require('./server')

const trip1 = { trip_name: 'Brazil', trip_cost: '$9499' }
const trip4 = { trip_name: 'the sun', trip_cost: '$9090909' }

beforeAll(async ()=> {
    await db.migrate.rollback()
    await db.migrate.latest()
    
})

beforeEach(async ()=> {
    await db('trips').truncate()
})

afterAll(async ()=>{
    await db.destroy()
})


describe('Environment', () => {
    it('correct env', () => {
      expect(process.env.NODE_ENV).toBe('testing');
    });
  });
  
  describe('GET /trips', () => {
    it('should return an empty array when there are no trips', async () => {
      const response = await request(server).get('/trips');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  
    it('should return all trips when there are trips in the database', async () => {
      // Insert some trips into the database
      await db('trips').insert(trip1);
      await db('trips').insert(trip4);
  
      const response = await request(server).get('/trips');
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(2);
    });
  });
  
  describe('GET /trips/:id', () => {
    it('should return 404 when a trip with the given ID does not exist', async () => {
      const response = await request(server).get('/trips/123');
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'Trip not found' });
    });
    it('should return 404 when a trip with the given ID does not exist', async () => {
        const response = await request(server).get('/trips/123');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'Trip not found' });
      });
      it('should return 404 when a trip with the given ID does not exist', async () => {
        const response = await request(server).get('/trips/123');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'Trip not found' });
      });
      it('should return 404 when a trip with the given ID does not exist', async () => {
        const response = await request(server).get('/trips/123');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'Trip not found' });
      }); it('should return 404 when a trip with the given ID does not exist', async () => {
        const response = await request(server).get('/trips/123');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'Trip not found' });
      });
      it('should return 404 when a trip with the given ID does not exist', async () => {
        const response = await request(server).get('/trips/123');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'Trip not found' });
      });
  });