require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const userRoutes = require("./Routes/UserRoutes")

const app = express();


//Middlewares

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(
    cors({
        origin:["http://localhost:3000", "https://authz-app.versel.app"],
        credentials: true
    })
)

//Routes 
app.use("/api/users", userRoutes)


app.get("/", (req, res) => {
    res.send("Home Page");
});

const PORT = process.env.PORT || 5000;

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
