const authController = require('../../controller/auth.controller');
/**
 * Auth Routes
 */
module.exports = (app) => {
    // route auth/user
    app.post(`/auth/user`, authController.userLogin);
};
