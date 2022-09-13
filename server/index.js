// boilerplate
const express = require("express");
const cors = require("cors");
const path = require("path");

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
    res.sendFile(path.join(__dirname, 'index.js'))
});

// CAT FACTS ENDPOINTS
app.get("/cat-facts", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/cat-facts.html"))
})

app.get("/catfacts", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/cat-facts.js"))
});

// MAGIC CAT BALL ENDPOINTS
app.get("/magic-cat-ball", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/magic-cat-ball.html"))
})

app.get("/magiccatball", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/magic-cat-ball.js"))
});

// MEOW-TAC-TOE ENDPOINTS
app.get("/meow-tac-toe", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/meow-tac-toe.html"))
})

app.get("/meowtactoe", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/meow-tac-toe.js"))
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
app.listen(process.env.PORT || 3000, function(){
    console.log("Server listening", this.address().port, app.settings.env);
  });
