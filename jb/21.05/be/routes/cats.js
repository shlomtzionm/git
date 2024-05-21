const express = require("express"),
 router = express.Router();
  const fs = require("fs");

const getAllAnimalsFromFile =async ()=>{
    let file = await fs.readFileSync('data/cats.json').toString() 
    return JSON.parse(file)
}

const writeToFile = (data) => {
fs.writeFileSync("data/cats.json",JSON.stringify(data))
}

const getArrayWithoutID = (allAnimals,req) =>{
 return allAnimals.filter((animal)=>animal.id !== +req.params.id)
}

router.get('/', async(_, res)=>{
const allAnimals = await getAllAnimalsFromFile()
res.send(allAnimals)
})  

router.post('/', async(req, res)=>{
  let allAnimals = await getAllAnimalsFromFile()
  const newAnimal = req.body
  allAnimals.push(newAnimal)
writeToFile(allAnimals)
res.send(allAnimals)
})

router.patch('/:id', async(req,res)=>{
  let allAnimals = await getAllAnimalsFromFile()
  let animalToCHange = allAnimals.find((animal)=> animal.id === +req.params.id)
let newArray = getArrayWithoutID(allAnimals)
let animalObject = {...animalToCHange, ...req.body}
newArray.push(animalObject)
writeToFile(newArray)
res.send(newArray)
})

router.delete('/:id', async(req,res)=>{
  let allAnimals = await getAllAnimalsFromFile()
  let newArray = getArrayWithoutID(allAnimals,req)
writeToFile(newArray)
res.send(newArray)
})

module.exports = router