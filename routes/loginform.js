var express = require('express');
const pool = require('./pool');
var router = express.Router();


router.post('/addnewuser', function(req, res) {
    console.log(req.body);
    pool.query('insert into details set ?', [req.body],function(error,result){
       
        if(error)
        {
            console.log(error);
         return res.status(500).json({ status: false, error: error });
        }
        else{
             
            return res.status(200).json({ status: true })

        }


    })


});

module.exports = router;