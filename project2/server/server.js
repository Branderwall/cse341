const express = require("express");
const mongodb = require("./db/connect");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const session = require("express-session");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const routes = require("./routes");

// create port variable
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.GOOGLE_CLIENT_SECRET,
    })
);

app.get("/", function (req, res) {
    res.render("pages/auth");
});

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
//     .use(cors())
//     .use(bodyParser.json())
//     .use(bodyParser.urlencoded({ extended: true }))
//     .use((req, res, next) => {
//         //Change * to server site to prevent external site access
//         res.setHeader("Access-Control-Allow-Origin", "*");
//         res.setHeader(
//             "Access-Control-Allow-Headers",
//             "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
//         );
//         res.setHeader("Content-Type", "application/json");
//         res.setHeader(
//             "Access-Control-Allow-Methods",
//             "GET, POST, PUT, DELETE, OPTIONS"
//         );
//         next();
//     })
//     .use("/", routes);

mongodb.initDB((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
});

/*** PASSPORT ***/

const passport = require("passport");
var userProfile;

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

app.get("/success", (req, res) => res.send(userProfile));
app.get("/error", (req, res) => res.send("error logging in"));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

/*** GOOGLE AUTH ***/

const host = process.env.LOCALHOST || "https://adamcse341blog.onrender.com/";

const callbackURL = host + "auth/google/callback";

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: callbackURL,
        },
        function (accessToken, refreshToken, profile, done) {
            userProfile = profile;
            return done(null, userProfile);
        }
    )
);

app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/error" }),
    function (req, res) {
        // Successful authentication, redirect success.
        res.redirect("/success");
    }
);
