const router = require("express").Router();


router.get('/', (req, res) => {
    console.log(req.user)
    if (req.user) {
        res.send({ status: 'success', user: req.user })
    } else {
        res.send({ status: 'failed' })
    }
})

module.exports = router
