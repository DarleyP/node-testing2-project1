exports.up = function(knex) {
    return knex.schema.createTable('trips', tbl => {
      tbl.increments('trip_id');
      tbl.string('trip_name',20).unique().notNullable()
      tbl.integer("trip_cost").notNullable();
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists("trips");
  };
  