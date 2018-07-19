'use strict';

/**
 * Lenders.js controller
 *
 * @description: A set of functions called "actions" for managing `Lenders`.
 */

module.exports = {

  /**
   * Retrieve lenders records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.lenders.search(ctx.query);
    } else {
      return strapi.services.lenders.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a lenders record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.lenders.fetch(ctx.params);
  },

  /**
   * Count lenders records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.lenders.count(ctx.query);
  },

  /**
   * Create a/an lenders record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.lenders.add(ctx.request.body);
  },

  /**
   * Update a/an lenders record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.lenders.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an lenders record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.lenders.remove(ctx.params);
  }
};
