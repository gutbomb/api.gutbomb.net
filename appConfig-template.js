const appConfig = {
    mailConfig: {
        host: '',
        port: 465,
        auth: {
          user: '',
          pass: '',
        },
        secure: true,
        logger: true,
        debug: true,
    },
    environment: '', // Change this to 'dev' or 'production'
    useSSL: false, // change this to true to use SSL
    appPort: 3002, // change this to whatever port you set for the api to run on
    serverPath: '', //change this to whatever path the app.js is in
    sslOptions: {
        key: '', // change this to the path and filename of your key file
        cert: '' // change this to the path and filename of your certificate
    }
};
module.exports = appConfig;
