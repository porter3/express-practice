const express = require('express')
const router = express.Router() // an "isolated instance of middleware and routes". Behaves like middleware.


router.get('/', (req, res, next) => {
    return res.status(200)
        .json({ success: true, message: 'successful request'}).then
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    return res.status(200)
        .json({ success: true, message: `successful request - id: ${id}` })
})

module.exports = router