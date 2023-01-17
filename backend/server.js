const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 4000;

const mongoose = require("mongoose");

const bcrypt = require('bcrypt');
const { UserFlag } = require("dfx/types");

const saltRounds = 10;


mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/fixie", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.set("views", __dirname + "/views")

app.get("/", (req, res) => {
    res.send("hello homepage");
})

app.post("/api/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ username: username }).then(result => async () => {
        if (result) {
            const passMatch = await bcrypt.compare(password, result.password);
            if (passMatch) {
                res.send()
            }
        }
    })
})

app.listen(PORT, console.log(`listening on port ${PORT}`));