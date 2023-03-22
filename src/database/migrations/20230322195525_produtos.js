/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('produtos', function(table){
        table.string('key').notNullable();
        table.string('name').notNullable();
        table.string('date').notNullable();
        table.string('plano').notNullable();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('produtos');
  
};
