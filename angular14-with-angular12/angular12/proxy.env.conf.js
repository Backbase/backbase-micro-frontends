module.exports = [
  {
    context: '/api',
    target: 'https://app.bus.sdbxaz.azure.backbaseservices.com',
    secure: false,
    changeOrigin: true,
    bypass: function (req) {
      req.headers['X-SDBXAZ-API-KEY'] = '<change_this_placeholder_to_required_sdbxaz_header>';
    },
  },
  {
    context: '/auth',
    target: 'https://identity.bus.sdbxaz.azure.backbaseservices.com',
    secure: false,
    changeOrigin: true,
    bypass: function (req) {
      req.headers['X-SDBXAZ-API-KEY'] = '<change_this_placeholder_to_required_sdbxaz_header>';
    },
  },
];
