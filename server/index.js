// boilerplate
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


// deployment to netlify
app.use(express.static(path.join(__dirname, "../client")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './index.js'))
});

app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, './styles.css'))
});



// CAT FACTS
const {getCatFact, editCatFact, addCatFact} = require("./controller");

// local
app.get("/api/catfacts", getCatFact);
app.put('/api/catfacts/:id', editCatFact);
app.post("/api/catfacts", addCatFact);


// MAGIC CAT BALL
const { getAnswer } = require('./controller')
// local
app.get("/api/answers", getAnswer);


// listening
app.listen(4000, () => console.log("Server running on 4000"));
