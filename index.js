const express = require('express');
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

const port = process.env.PORT || 5000;
app.use(cors());
app.get('/', function (req, res) {
    res.send('hello world')
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ylija.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    console.log("Error is:", err);
    console.log("Database connected Successfully");

    const blogCollections = client.db('tech-blogs').collection('all-blogs');

    app.get('/blogs', (req, res) => {
        blogCollections.find()
            .toArray((err, items) => {
                res.send(items);
            });
    });

    app.get('/blog/:id', (req, res) => {
        const id = new ObjectId(req.params.id);
        blogCollections.find({ _id: id })
            .toArray((err, items) => {
                req.send(items);
            });
    });

    app.post('/addBlog', (req, res) => {
        const newBlog = req.body;
        console.log(newBlog);
        blogCollections.insertOne(newBlog)
            .then((result) => {
                console.log('insertedCount', result.insertedCount);
                res.send(result.insertedCount > 0)
            });
    });

});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});