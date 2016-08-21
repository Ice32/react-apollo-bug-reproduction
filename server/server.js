/**
 * Created by Keno on 8/21/2016.
 */
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/../dist"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});