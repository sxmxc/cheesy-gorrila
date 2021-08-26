module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://api.voidmoose.net'),
  proxy: env.bool('IS_PROXIED', true),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'eca3a10daff66e6e605b7ae5262017cb'),
    },
  },
});
