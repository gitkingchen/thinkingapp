var router = require('express').Router();
var Idea = require('../db/schemas');


router.get('/getList', async function (req, res, next) {

    try {
        var list = await Idea.find();

        res.json({
            code: 0,
            data: list,
            msg: ''
        })
    } catch (e) {

        res.json({
            code: 1,
            data: '',
            msg: e
        });

        next(e)
    }


})

router.get('/add', async function (req, res, next) {

    var title = req.query.title;
    var content = req.query.content;

    try {
        var user = new Idea({
            title,
            content
        })
        await user.save();
        res.json({
            code: 0,
            data: '',
            msg: 'success'
        });
    } catch (e) {
        res.json({
            code: 1,
            data: '',
            msg: e
        });
        next(e)
    }
})


module.exports = router;