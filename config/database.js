module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'WEBIDC10.znetlive.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'ascent_strapi_backend'),
        username: env('DATABASE_USERNAME', 'ascent_admin'),
        password: env('DATABASE_PASSWORD', 'Admin@123#'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
