const session = require('express-session')
const express = require('express')
const passport = require('passport')
const cors = require('cors')
const app = express()
require('./config/passport')
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRoutes')
const profileRoutes = require('./routes/profileRoutes')
const connectDB = require('./config/db')
const path = require('path');
connectDB();
dotenv.config()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}))

app.set("trust proxy", 1);
app.use(
    session({
        secret: process.env.COOKIE_KEY,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    }))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)


// deployment
__dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}.`)
})