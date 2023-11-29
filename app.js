const express = require('express'),
    https = require('https'),
    app = express(),
    fs = require('fs'),
    appConfig = require('./appConfig.js'),
    port = appConfig.appPort,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const routes = require('./routes/apiRoutes.js');
routes(app);

if(appConfig.useSSL) {
    https.createServer({
        key: fs.readFileSync(appConfig.sslOptions.key),
        cert: fs.readFileSync(appConfig.sslOptions.cert)
    }, app).listen(port);
    console.log('secure gutbomb.net API server started on: ' + port);
} else {
    app.listen(port);
    console.log('gutbomb.net API server started on: ' + port);
}
