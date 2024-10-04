
export function up(knex) {
    //create tables
    return knex.schema.createTable("users",function(table){
    table.increments("id");
    table.string("name").notNullable();
  
     }).createTable("posts",function(table){
        table.increments("id");
        table.integer("user_id").unsigned().notNullable();
        table.string("title",30).notNullable();
        table.string("content").notNullable();
        table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
});
  
};


export function down(knex) {
    //drop tables
    return knex.schema.dropTable("users");
  
};
