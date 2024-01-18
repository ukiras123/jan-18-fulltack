const express = require('express');
const { todoRouter } = require('./src/routes/todo');
// import express from 'express'
const { mongoConnect } = require('./src/dbConfig/mongoConnect.js')
const cors = require('cors');
const app = express();
mongoConnect();
const PORT = 3000;
// Middleware
app.use(express.json())
app.use(cors())

app.use("/api/v1/todo", todoRouter)


app.use('/', (req, res) => {
    // DO something
    res.json({
        status: "I am healthy"
    })
})

app.listen(PORT, () => {
    console.log(`I am running in http:localhost:${PORT}`)
})