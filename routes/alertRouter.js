var express = require('express');
var router = express.Router();
const Axios=require('axios')

/* GET ALERT page. */
router.get('/', async function(req, res, next) {
    const symbol='SNOW';
    const slackResult=await Axios.post('<webhook>',{
        text:'hello world'
    });
    console.log(slackResult);

    res.json({
    date:new Date().toISOString()
 })
});

module.exports = router;
