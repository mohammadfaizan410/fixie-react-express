const bodyParser = require("body-parser");
const express = require("express");
const sessions = require("express-session");
const app = express();
const PORT = 4000;
const cors = require("cors");
const User = require("./schemas/User");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

var sess;

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/fixie_DB", { useNewUrlParser: true });

const twoMinutes = 1000 * 60 * 2;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());

app.use("/public", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.use(sessions({
    secret: 'thisismyfuckingsecretdudefuckoff',
    saveUninitialized: false,
    cookie: { maxAge: twoMinutes },
    resave: false
}));

app.set("views", __dirname + "/views")

app.get("/", (req, res) => {
    sess = req.session;
    if (sess.user){
        res.send(sess.user);
    }
})

app.post("/api/login", async (req, res) => {
    
    sess = req.session;

    const email = req.body.data.email;
    const password = req.body.data.password;
    
    User.findOne({ email: email }).then(result => {

        if (result) {
            bcrypt.compare(password, result.password, (err, compResult) => {
            if (compResult){
                sess=req.session;
                sess.user = {
                    _id: result._id,
                    name: result.name,
                    surname: result.surname,
                    email: result.email,
                    worker: result.worker
                };
                res.send(sess);
            } else {
                res.send(false);
            }
            })
        } else {
            res.send(false);
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

app.listen(PORT, console.log(`Server running at port ${PORT}`));