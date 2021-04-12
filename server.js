const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const RegisterUser = require("./models/registerUser");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("rent-a-bike-nj/public"));
}

app.use(require("cors")());

app.use(express.static(path.join(__dirname, 'rent-a-bike-nj/public')))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'rent-a-bike-nj', 'public', 'index.html'))
})

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/rentABike",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }

);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})

app.post('/api/register', (req, res) => {
    console.log("Hit the REGISTER USER SERVER API", req.body);
    RegisterUser.create(req.body).then((error, data) => {
        console.log("USER we added to DB", req.body);
        if (error) {
            res.send(error);
        } else {
            console.log("THIS IS what we got back when we saved", data, error);
            console.log("hit the else! out to res!!!!");
            res.json(data);
        }
    })
});

// GETTING FORM INPUT FROM DB AND RENDERING MEMBERS TO UI
app.get("/api/register", (req, res) => {
    console.log("Hit the GET REGISTER SERVER API",);
    RegisterUser.find({}, (error, data) => {
        console.log(data, "/all stuff we got from DB");
        if (error) {
            res.send(error);
        } else {
            // res.json(data);
            res.send(data);
            console.log("else state of server GET API", data)
        }
    });
});





