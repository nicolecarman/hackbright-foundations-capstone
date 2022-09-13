// boilerplate
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


// deployment
app.use(express.static(path.join(__dirname, "../client")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
});

app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/styles.css'))
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../server/index.js'))
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
app.listen(process.env.PORT || 4000, function(){
    console.log("Server listening", this.address().port, app.settings.env);
  });
