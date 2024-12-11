import express from 'express'
import cors from 'cors'
import zipcodes from 'zi'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __dirname=dirname(fileURLToPath(import.meta.url))
const server=express()

server.use(express.json()) //body-parser
server.use(cors())
server.get('/',(req,res)=>{
    res.send("Hello Word")
    console.log("hello world")
})
server.listen(3000)