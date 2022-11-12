const http = require('http');
const { express, configs } = require('./configs');

let app = express();
http
    .createServer(app)
    .listen(configs.PORT, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(`Server is running on the port: ${configs.PORT}`)

        }
    });
