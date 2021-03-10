module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        // host: env('DATABASE_HOST', 'iMac-de-Fernando.local'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'agroapp'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', 'admin1995'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
