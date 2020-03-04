'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ToolSchema extends Schema {
  up() {
    this.create('tools', (table) => {
      table.increments()
      table.string('title', 60)
      table.string('link', 200)
      table.string('description', 500)
      table.string('tags')
    })
  }

  down() {
    this.drop('tools')
  }
}

module.exports = ToolSchema
