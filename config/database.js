module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'api-strapi'),
        username: env('DATABASE_USERNAME', 'api'),
        password: env('DATABASE_PASSWORD', 'PLEASE_CHANGE_ME'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
