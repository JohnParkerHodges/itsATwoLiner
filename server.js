const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Workout = require("./models/Workout");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WorkoutDB", { useNewUrlParser: true });

app.get("/notes", (req, res) => {
    db.Note.find({})
        .then(dbNote => {
            res.json(dbNote);
        })
        .catch(err => {
            res.json(err);
        });
});





app.post("/submit", ({ body }, res) => {
    const newWorkOut = new Workout(body);
    Workout.create(newWorkOut)
        .then(WorkoutDB => {
            res.json(WorkoutDB)
        })
        .catch(err => {
            res.json(err);
        })
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});