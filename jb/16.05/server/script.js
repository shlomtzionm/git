const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const cors = require("cors")
app.use(cors(),express.json())



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const getListFromFile = async () =>{
  return JSON.parse(fs.readFileSync('data.json').toString()).sort(
    (a,b) => a.id - b.id
  )

}
app.get('/todo', async (req, res) => {
    let list = await getListFromFile()
  res.send(list)
})


app.post("/todo", async(req,res)=>{
    let toDoList = await getListFromFile()
    toDoList.push(req.body)
    fs.writeFileSync('data.json', JSON.stringify(toDoList) )
})

app.patch("/todo/:id", async(req,res)=>{
  let toDoList = await getListFromFile()
  let id = req.params.id
let item = toDoList.find((item)=>item.id === +id)
let newList = toDoList.filter((item)=>item.id !== +id);
let newItem = {...item , ...req.body}
newList.push(newItem)
fs.writeFileSync("data.json",JSON.stringify(newList))
} )

app.delete('/todo/:id',async(req,res)=>{
  let toDoList = await getListFromFile()
  let id = req.params.id
  let newList = toDoList.filter((item)=>item.id !== +id)
  fs.writeFileSync("data.json",JSON.stringify(newList))
})