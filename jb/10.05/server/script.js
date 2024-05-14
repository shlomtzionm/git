
const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors');
const port = 3000

app.use([cors(),express.json()]);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


app.get('/grades', async (req, res) => {
  let dataFile = fs.readFileSync('grades.json')
 dataFile.toString()
    let json = JSON.parse(dataFile)
  res.send(json)
})


app.post('/grades',async (req,res)=>{
  let dataFile = fs.readFileSync('grades.json')
  let gradesArray = JSON.parse(dataFile)
  gradesArray.push(req.body)

  
  fs.writeFileSync('grades.json',JSON.stringify(gradesArray))
  console.log("we got the data")
})

app.patch("/grades", async(req,res)=>{
  let dataFile = fs.readFileSync('grades.json')
  let gradesArray = JSON.parse(dataFile);
  let index = gradesArray.findIndex(item => item["name"] === req.body.name);

  if (index !== -1) {
    gradesArray[index]["grade"] = req.body["grade"];
    fs.writeFileSync('grades.json', JSON.stringify(gradesArray));
    console.log("Grade updated successfully");
  } 
});

app.delete('/grades', async(req,res)=>{
  let dataFile = fs.readFileSync('grades.json')
  let gradesArray = JSON.parse(dataFile)
gradesArray = gradesArray.filter(item => item['name'] !== req.body.name)

fs.writeFileSync('grades.json',JSON.stringify(gradesArray))
console.log('item is deleted')
})