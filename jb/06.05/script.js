const express = require('express')
const app = express()
const fs = require("fs")

let shlomtzCount = 0
let guyCount = 0
app.listen(3000,()=>{
    console.log("welcome to my server")
})

app.get("/count",async (req,res)=>{
    let count = fs.readFileSync('data.text')
    count++
    fs.writeFileSync('data.text',`${count}`)
    res.send(`${count}`)
})

app.get('/shlomtz',(req,res)=>{
    shlomtzCount++
    res.send(`shlomtz count is ${shlomtzCount}`)
})

app.get('/guy',(req,res)=>{
    guyCount++
    res.send(`guy count is: ${guyCount}`)
})


app.get('/json',async (req,res)=>{
    let file = fs.readFileSync("data.json")
    let jsonFile = JSON.parse(file)
    res.send(`${jsonFile}`)
})


app.get("/add", async(req,res)=>{
    let date = new Date().getTime()
    fs.appendFileSync('data.text',`${date}\n`)
    res.send("you add a line")

    
})