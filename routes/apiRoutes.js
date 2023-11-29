'use strict';
module.exports = function(app) {
    const mailController = require('../controllers/mailController');

    app.route('/api/mail')
    .post(mailController.send);
};