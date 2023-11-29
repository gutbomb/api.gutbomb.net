const appConfig = require('../appConfig.js'),
    nodemailer = require('nodemailer'),
    transporter = nodemailer.createTransport(appConfig.mailConfig);

exports.send = function(req, res) {
    if (req.body.emailAddress && req.body.message) {
        let mailOptions = {
            from: appConfig.mailConfig.auth.user,
            to: appConfig.mailConfig.auth.user,
            subject: `gutbomb.net contact form message from ${req.body.emailAddress}`,
            text: req.body.message
        };
        transporter.sendMail(mailOptions, (e) => {return res.status(500).json({'message': e.response});}, (r) => {return res.json({'status': 'message sent successfully'})});
    } else {
        return res.status(500).json({'status': 'no message or sender'});
    }
}