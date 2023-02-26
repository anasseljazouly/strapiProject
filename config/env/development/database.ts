// export default ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME_TEST1'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', 'maneteam'),
//       ssl: env.json(env('DATABASE_SSL_SELF', false)) ,
//     },
//   },
// });

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST_PRODUCTION'),
      port: env('DATABASE_PORT_PRODUCTION'),
      database: env('DATABASE_NAME_TEST1'),
      user: env('DATABASE_USER_PRODUCTION'),
      password: env('DATABASE_PASS_PRODUCTION'),
      ssl: env.json(env('DATABASE_SSL_SELF', false)) ,
    },
  },
});
