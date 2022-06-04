const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:8000";

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            user: req.user,
        });
    }
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
    });
});


router.get("/logout", (req, res) => {
    req.logout(function (err) {
        res.send()
    });
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/google/callback",
    passport.authenticate("google", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
    }));

router.get('/github', passport.authenticate('github'));

router.get('/github/callback',
    passport.authenticate('github'), (req, res) => {
        res.redirect(CLIENT_URL);
    });


module.exports = router