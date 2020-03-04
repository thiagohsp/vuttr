'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Tool = use('App/Models/Tool');

/**
 * Resourceful controller for interacting with tools
 */
class ToolController {
  /**
   * Show a list of all tools.
   * GET tools
   *
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index({ request, response }) {
    const tools = await Tool
      .query()
      .where('tags', 'LIKE', '%' + (request.input('tag') || '%') + '%')
      .fetch();

    return tools;
  }

  /**
   * Create/save a new tool.
   * POST tools
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only([
      'title',
      'link',
      'description',
      'tags'
    ])

    const tool = await Tool.create(data);

    return response.status(201).json(tool);
  }

  /**
   * Display a single tool.
   * GET tools/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const tool = await Tool.find(params.id);

    return tool;
  }
  /**
   * Update tool details.
   * PUT or PATCH tools/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a tool with id.
   * DELETE tools/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params
    const tool = await Tool.find(id)
    await tool.delete()
    return response.status(204).json('');
  }
}

module.exports = ToolController
