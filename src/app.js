const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const uploadDestination = 'uploadDestination'

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./controllers/authController'));

app.use(express.static(path.join(__dirname, uploadDestination)))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

//deployment
if (process.env.NODE_ENV === "production") {
    const root = path.join(__dirname, "..", "client", "build");
    app.use(express.static(root));
    app.get("*", (req, res) => {
        res.sendFile("index.html", { root });
    });
};


module.exports = app;