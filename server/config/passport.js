const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
require('dotenv').config()
const User = require('../models/user-model')


passport.serializeUser((user, done) => {
    return done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    return done(null, user)
})

passport.use(new GoogleStrategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: "/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, done) {
        // check if user already exists
        const currentUser = await User.findOne({ googleId: profile.id })
        if (currentUser) {
            done(null, currentUser)
        } else {
            // new user signup
            const newUser = await new User({
                username: profile.displayName,
                googleId: profile.id
            }).save()

            if (newUser) {
                done(null, newUser)
            }
        }
    }
));


passport.use(new GitHubStrategy({
    clientID: `${process.env.GITHUB_CLIENT_ID}`,
    clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
    callbackURL: "/auth/github/callback"
},
    async function (accessToken, refreshToken, profile, done) {
        // check if user already exists
        const currentUser = await User.findOne({ googleId: profile.id })
        if (currentUser) {
            done(null, currentUser)
        } else {
            // new user signup
            const newUser = await new User({
                username: profile.displayName,
                googleId: profile.id
            }).save()

            if (newUser) {
                done(null, newUser)
            }
        }
    }
));


