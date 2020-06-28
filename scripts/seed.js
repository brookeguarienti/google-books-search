const mongoose = require("mongoose");
const db = require("../models");

// this file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

const bookSeed = 
{
    authors: [""],
    description: "",
    image: "",
    link: "",
    title: "",
}

db.Book 
.remove({})
.then(() => db.Book.collection.insertMany(bookSeed))
.then(data => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
}).catch(err => {
    console.error(err);
    process.exit(1);
});