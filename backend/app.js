const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET , POST, PATCH, PUT, DELETE, OPTIONS");
    next();
})

app.post('/api/post',(req,res,next) => {
    const data = req.body;
    console.log(data);
    res.status(200).json({
        message:'response recorded successfully'
    })
})

app.use('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: '1234',
            content: 'hi i am data1',
            title: 'its titel 1'
        },

        {
            id: '1234',
            content: 'hi i am data1',
            title: 'its titel 1'
        }
    ]
    res.status(200).json({
        message: 'data as been successfully viewed',
        posts: posts
    })
})

module.exports = app;