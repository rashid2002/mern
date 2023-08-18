const express = require('express');
const router = express.Router();
router.post('/Vegetable',(req,res)=>{
    try{
        console.log(global.Internship);
        res.send([global.Internship,global.Data2])
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;