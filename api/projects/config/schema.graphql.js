module.exports = {
  query: `projectsCount(where: JSON): Int!`,
  resolver: {
    Query: {
      projectsCount: {
        description: "Return the count of projects",
        resolverOf: "application::projects.projects.count",
        resolver: async (obj, options, ctx) => {
          return await strapi.api.projects.services.projects.count(
            options.where || {}
          );
        },
      },
    },
  },
};
