// boilerplate
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());



// CAT FACTS
const {getCatFact, editCatFact, addCatFact} = require("./controller");
app.get("/api/catfacts", getCatFact);
app.put('/api/catfacts/:id', editCatFact);
app.post("/api/catfacts", addCatFact);


// MAGIC CAT BALL
const { getAnswer } = require('./controller')
app.get("/api/answers", getAnswer);


// listening
app.listen(4000, () => console.log("Server running on 4000"));
