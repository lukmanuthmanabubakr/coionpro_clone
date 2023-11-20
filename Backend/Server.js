require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

const PORT = process.env.PORT || 5000; // Corrected the default port

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server connected to port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
