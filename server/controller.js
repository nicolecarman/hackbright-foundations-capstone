const catFacts = require("./db.json");
let globalID = 26;

module.exports = {
    // CAT FACTS
    getCatFact: (req, res) => {
        res.status(200).send(catFacts);
    },
    addCatFact: (req, res) => {
        let { fact, rating } = req.body;
        rating = Number(rating);
        const newCatFact = {
            id: globalID,
            fact,
            rating: 1,
        };
        catFacts.push(newCatFact);
        res.status(200).send(catFacts);

        // increment id for new cat facts 
        globalID++;
    },
    editCatFact: (req, res) => {
        let { id } = req.params;
        id = Number(id);
        const { type } = req.body;
        const index = catFacts.findIndex(element => element.id === id);

        // increments rating when user presses button
        if (type === "plus") {
            catFacts[index].rating++;
            res.status(200).send(catFacts);
        } else {
            res.sendStatus(400);
        }
    },
    getAnswer: (req, res) => {
        const answers = ["...Meh.", "...How am I supposed to know?", "...That's besides the point... did you ever get more of those treats I like?", "...I guess.", "...Ask me after my nap.", "...I'll tell you after you feed me.", "...Sure.", "...You can try.", "...Looks kind of favorable, I guess.", "...Why are you talking to me?"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * answers.length);
        let randomAnswer = answers[randomIndex];
      
        res.status(200).send(randomAnswer);
    }
}