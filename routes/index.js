const authRoutes = require('./auth/authRoutes');

module.exports = (app) => {
  authRoutes(app);
};
