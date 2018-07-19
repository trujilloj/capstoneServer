'use strict';

/**
 * Requests.js controller
 *
 * @description: A set of functions called "actions" for managing `Requests`.
 */

module.exports = {

  /**
   * Retrieve requests records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.requests.search(ctx.query);
    } else {
      return strapi.services.requests.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a requests record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.requests.fetch(ctx.params);
  },

  /**
   * Count requests records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.requests.count(ctx.query);
  },

  /**
   * Create a/an requests record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.requests.add(ctx.request.body);
  },

  /**
   * Update a/an requests record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.requests.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an requests record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.requests.remove(ctx.params);
  }
};
