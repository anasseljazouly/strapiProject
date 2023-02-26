// mdp : Azer1234
module.exports = {
  apps: [
    {
      name: "strapimultitest1",
      cwd: "E:/GitHub/strapiProject",
      script: "D:/nodejs/node_modules/npm/bin/npm-cli.js",
      args: "run develop",
      env: {
        NODE_ENV: "strapimultitest1",
        HOST_PORT_TEST1: 1338,
        DATABASE_HOST_PRODUCTION: "localhost",
        DATABASE_PORT_PRODUCTION: "5432",
        DATABASE_USER_PRODUCTION: "postgres",
        DATABASE_PASS_PRODUCTION: "maneteam",
        DATABASE_NAME_TEST1: "strapi1",
        ADMIN_JWT_SECRET: "vzqLms-iwudoa-rgl2sp",
        DOMAIN_URL: "site1.moussaab.dev",
      },
    },
    {
      name: "strapimultitest2",
      cwd: "E:/GitHub/strapiProject",
      script: "D:/nodejs/node_modules/npm/bin/npm-cli.js",
      args: "run develop",
      env: {
        NODE_ENV: "strapimultitest2",
        HOST_PORT_TEST1: 1339,
        DATABASE_HOST_PRODUCTION: "localhost",
        DATABASE_PORT_PRODUCTION: "5432",
        DATABASE_USER_PRODUCTION: "postgres",
        DATABASE_PASS_PRODUCTION: "maneteam",
        DATABASE_NAME_TEST1: "strapi2",
        ADMIN_JWT_SECRET: "vzqLms-iwudoa-rgl2sp",
        DOMAIN_URL: "site2.moussaab.dev",
      },
    },
  ],
};
