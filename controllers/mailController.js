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
        transporter.sendMail(mailOptions, (e) => {console.error(e)}, (r) => {console.log(r)});
        return res.json({'status': 'message sent successfully'})
    } else {
        return res.json({'status': 'no message sent'});
    }
}