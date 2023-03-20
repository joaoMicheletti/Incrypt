/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createtable('user', function(table) {
        
        table.incriments();
        table.string('user').notNullable();
	table.string('pass').notNullable();
	table.string('key').notNullable();
    });  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
