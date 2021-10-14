import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    
    this.schema.createTable(this.tableName, (table) => {
      table.increments('userId').primary()
      table.string('firstName').notNullable()
      table.string('lastName').notNullable()
      table.string('phone').notNullable() //.unique() ?
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.boolean('isActive').defaultTo(true)
      table.timestamp('createdAt', { useTz: true })
      table.timestamp('updatedAt', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
