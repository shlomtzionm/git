const express = require("express"),
 router = express.Router();
  const fs = require("fs");
  const  _ = require('lodash');


const getAllAnimalsFromFile =async ()=>{
    let file = await fs.readFileSync('data/cats.json').toString() 
    return JSON.parse(file)
}

const writeToFile = (data) => {
fs.writeFileSync("data/cats.json",JSON.stringify(data))
}

const getArrayWithoutID = (allAnimals,req) =>{
 return _.filter(allAnimals, (animal) => animal.id !== +req.params.id)
}

const getNextId = async () => {
  const cats = await getAllAnimalsFromFile();
  const ids = cats.map(dog => dog.id);
  const highestId = Math.max(...ids, 0); // Use 0 as a default to handle empty arrays
  return highestId + 1;
};

router.get('/', async(_, res)=>{
const allAnimals = await getAllAnimalsFromFile()
res.send(allAnimals)
})  

router.post('/', async(req, res)=>{
  let allAnimals = await getAllAnimalsFromFile()
  const newAnimal = req.body
  newAnimal.id = await getNextId()
  newAnimal.img = "fe/src/cat.jpg"
  allAnimals.push(newAnimal)
writeToFile(allAnimals)
res.send(allAnimals)
})

router.patch('/:id', async(req,res)=>{
  let allAnimals = await getAllAnimalsFromFile()
  let animalToCHange = _.find(allAnimals, (animal)=> animal.id === +req.params.id)
let newArray = getArrayWithoutID(allAnimals,req)
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