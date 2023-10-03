const db = require('../data/dbConfig')

function getAll() {
    return db('trips')
  }
  
  function getById(id) {
    return db('trips').where('trip_id',id).first()
  }


  async function insert(trip) {
      const [id] = await db('trips').insert(trip);
      return getById(id); 
  
  }
  


  module.exports = {
    getAll,
    getById,
    insert
  }