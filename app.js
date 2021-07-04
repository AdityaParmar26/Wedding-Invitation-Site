const port = process.env.PORT || 8000;

const express = require("express");
const app = express();
const path = require("path");
const http = require('http').Server(app);

const staticPath = path.join(__dirname, "/public");

app.set("view engine", "hbs");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index");
});

http.listen(port, () => {
    console.log("listening to port..");
});