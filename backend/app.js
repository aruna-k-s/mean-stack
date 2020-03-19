const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require('./models/post');

const app = express();
mongoose.connect("mongodb+srv://arun:k4aEdcaFlKO6WBVW@cluster0-xjxay.mongodb.net/node-angular?retryWrites=true&w=majority")
    .then(() => {
        console.log("database connected");
    })
    .catch(() => {
        console.log("connection failed");
    });

app.use(bodyParser.json());

// const a ='k4aEdcaFlKO6WBVW';

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET , POST, PATCH, PUT, DELETE, OPTIONS");
    next();
})

app.post('/api/post', (req, res, next) => {
    // console.log(req.body);
    const data = new Post({
        title: req.body['title'],
        content: req.body['content']
    });
    data.save();
    res.status(200).json({
        message: 'response recorded successfully',
        status: 'success'
    })
});

app.post('/api/del-post', (req, res, next) => {
    // console.log(req.body);
    Post.deleteOne({ _id: req.body.id }).then((result) => {
        if(result.deletedCount === 1){
            res.status(200).json({
                id: req.body.id,
                message: 'successfully deleted',
                status: 'success'
            });
        } else { 
            res.status(200).json({
                id: req.body.id,
                message: 'Post is not available',
                status: 'success'
            });
        }
        
    })
})

app.get('/api/posts', (req, res, next) => {
    Post.find().then(documents => {
        // console.log(documents);
        res.status(200).json({
            message: 'data as been successfully viewed',
            posts: documents,
            status: 'success'
        })
    })
})

module.exports = app;