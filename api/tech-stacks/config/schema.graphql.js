module.exports = {
  query: `techStacksCount(where: JSON): Int!`,
  resolver: {
    Query: {
      techStacksCount: {
        description: "Return the count of tech stacks",
        resolverOf: "application::tech-stacks.tech-stacks.count",
        resolver: async (obj, options, ctx) => {
          return await strapi.api["tech-stacks"].services["tech-stacks"].count(
            options.where || {}
          );
        },
      },
    },
  },
};
