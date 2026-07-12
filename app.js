const express = require("express");
const dbConnection = require("./config/db");
const app = express();

app.get("/home", (req, res) => {
    res.send("hi");
});

const port = 4000;

const startServer = async () => {
    await dbConnection();
    app.listen(port, () => {
        console.log("Listening on port", port);
    });
};
 module.exports =app;

