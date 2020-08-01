var router = require('express').Router();
var Idea = require('../db/schemas');

router.get('/api/add', async function (req, res, next) {
    try {

        var content = req.query.content;
        var user = new Idea({
            content
        })
        var result = await user.save();
        res.json({
            code: 0,
            data: '',
            msg: 'success'
        });

    } catch (e) {
        next(e)
    }
})


module.exports = router;
