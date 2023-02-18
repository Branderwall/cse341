const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

/*** GOOGLE AUTH ***/

var userProfile;
const host = process.env.LOCALHOST || "https://adamcse341blog.onrender.com/";
const callbackURL = host + "auth/google/callback";
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

/*** AUTH ROUTING ***/

const loadLogin = (req, res) => {
    res.render("pages/auth");
};

const login = passport.authenticate("google", { scope: ["profile", "email"] });

const callbackError = passport.authenticate("google", {
    failureRedirect: "/error",
});

const callbackSuccess = (req, res) => {
    // Successful authentication, redirect success.
    res.redirect("/success");
};

const loginError = (req, res) => res.send("error logging in");

const loginSuccess = (req, res) => {
    res.render("pages/success", { user: userProfile });
    // res.send(userProfile);
};

module.exports = {
    loadLogin,
    login,
    callbackError,
    callbackSuccess,
    loginError,
    loginSuccess,
};
