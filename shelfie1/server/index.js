require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const massive = require('massive')
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)


const port = 4000
app.listen(port, () => {console.log(`killer bunnies are running on port ${port}`)})
