module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3d3ba89f675eb50a3fc78b3308925efb'),
  },
});
