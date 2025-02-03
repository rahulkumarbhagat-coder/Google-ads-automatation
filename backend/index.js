import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { chatResponse } from './controllers/chatResponse.js'

//port
const port = 4000

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()




//connect to database
// ConnectDB()

//open ai request
app.post('/', chatResponse)

app.listen(port , ()=>console.log('Server running on http://localhost:' + port))