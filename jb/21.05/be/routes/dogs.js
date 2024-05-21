const express = require("express"),
 router = express.Router();
  const fs = require("fs");

const getAllDogsFromFile =async ()=>{
    let file = await fs.readFileSync('data/dogs.json').toString() 
    return JSON.parse(file)
}


router.get('/', async(_, res)=>{
let dogs = await getAllDogsFromFile()
res.send(dogs)
})  

router.post("/")

module.exports = router