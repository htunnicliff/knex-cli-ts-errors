import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("example", (table) => {
    table.increments("id").primary();
    table.string("name").unique();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("example");
}
