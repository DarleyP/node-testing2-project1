exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('trips')
      .truncate()
      .then(function() {
        return knex('trips').insert([
          { trip_name: 'Punta Cana', trip_cost: '$999' },
          { trip_name: 'Japan', trip_cost: '$999' },
          { trip_name: 'Mexico', trip_cost: '$999' },
          { trip_name: 'Adam', trip_cost: '$999' },
        ]);
      });
  };