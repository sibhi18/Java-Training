const express = require("express");
const dbConnection = require("./config/db");
const app = express();

const port = 4000;

const startServer = async () => {
    await dbConnection();
    app.listen(port, () => {
        console.log("Listening on port", port);
    });
};
 module.exports =app;

