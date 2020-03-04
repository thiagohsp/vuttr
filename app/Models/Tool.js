'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tool extends Model {
    static get createdAtColumn() {
        return null
    }

    static get updatedAtColumn() {
        return null
    }

    getTags(tags) {
        return tags.split(',').map(
            tag => tag.trim()
        )
    }
}

module.exports = Tool
