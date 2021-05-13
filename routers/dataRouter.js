const express = require('express')
const router = express.Router();
const data = require('../data/data.js')

router.get('/get', (req,res) =>{
    try{
        console.log("end point called")
        let queryString = req.query.query.toLowerCase()
        if(queryString === ''){
            res.status(200).send(data)
            return
        }

        if(queryString !== null && queryString !== undefined){
            let response = data.filter(
                element => element.Name.toLowerCase().includes(queryString)
            )
            res.status(200).send(response)
        }
        return
    }catch(e){
        res.status(500).send('An error occured whilst filtering your request')
    }
})

module.exports = router