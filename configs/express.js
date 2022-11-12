const express = require('express');
const cors = require('cors');
const routes = require('../routes');




module.exports = () => {
    const app = express();
    app.use(cors());
    app.get('/', (req, res) => res.status(200).json({
        message: " App is working "
    }));
    app.use(routes);

    return app
};
