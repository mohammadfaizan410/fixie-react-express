const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const User = require("./schemas/User");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;




mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/fixie_DB", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());

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
                res.send("success")
            }
        }
    })
});

app.post("/api/register", (req, res) => {

    User.findOne({ email: req.body.data.email }).then(result => {
        if (!result) {       
            bcrypt.hash(req.body.data.password, saltRounds, function (err, hash) { 
                if (!err) {  
                    const newUser = new User({
                        name: req.body.data.name,
                        surname: req.body.data.surname,
                        email: req.body.data.email,
                        password: hash
                    });
                    newUser.save();
                    res.send(req.body.data)
                }
            }         
            )
        }
        else {
            res.send("exists");
        }
        // }
    })
})

app.listen(PORT, console.log(`listening on port ${PORT}`));