const bodyParser = require("body-parser");
const express = require("express");
const sessions = require("express-session");
const app = express();
const PORT = 4000;
const cors = require("cors");
const nodemailer = require('nodemailer'),
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fixieappcontact',
            pass: 'qqpsebticqdbfxik'
        }
    }),
    EmailTemplate = require('email-templates').EmailTemplate,
    path = require('path'),
    Promise = require('bluebird');
const User = require("./schemas/User");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

var sess;

function sendEmail(obj){
    console.log('in here send email function');

    return transporter.sendMail(obj);
}

function loadTemplate(templateName, context){
    console.log('in the load template function')

    let template = new EmailTemplate(path.join(__dirname, 'templates', templateName));
    return new Promise((resolve, reject) => {
        template.render(context, (err, result) => {
            if (err) reject(err);
            else resolve({
                email: result,
                context,
            });
        })
    });
}

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
                    name: result.name,
                    surname: result.surname,
                    email: result.email,
                    worker: result.worker
                };
                res.send(sess.user);
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
                    var id = mongoose.Types.ObjectId();

                    const newUser = new User({
                        _id: id,
                        name: req.body.data.name,
                        surname: req.body.data.surname,
                        email: req.body.data.email,
                        password: hash
                    });
                    newUser.save();

                    loadTemplate('welcome', { name: req.body.data.name, email: req.body.data.email, id }).then((mailInfo) => {
                        console.log('In the register load template function');

                        sendEmail({
                            to: mailInfo.context.email,
                            from: 'Fixie App',
                            subject: mailInfo.email.subject,
                            html: mailInfo.email.html,
                            text: mailInfo.email.text
                        })
                    })

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

app.post("/api/verify", async (req, res) => {
    const user = await User.findOneAndUpdate({_id: req.body.id}, {verified: true});
})

app.listen(PORT, console.log(`Server running at port ${PORT}`));