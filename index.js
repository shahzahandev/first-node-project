const express = require('express')
const app = express()
app.use(express.json())
const jwt = require('jsonwebtoken')
const bannerControllers = require('./bannerControllers/bannerControllers')

app.get('/banner', bannerControllers)

app.listen(8000, () => {
    console.log("The server running.........");
})







