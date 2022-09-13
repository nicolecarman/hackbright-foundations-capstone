// pull page elements
const catFactsList = document.querySelector('#display-answers');

const askTheCatBtn = document.getElementById("askTheCatBtn");

// for deployment
const PORT = process.env.PORT || 4000;

// set API to variable
//const baseURL = `http://localhost:4000/api/catfacts`;


// axios request
const getAnswer = () => {
    axios.get(`${PORT}/api/answers/`)
        .then(res => {
            const data = res.data;

            // pull element
            const answer = document.getElementById("answer-card");


            // checks to see if an answer is already being displayed on the page. if the div element is empty, it means the button hasn't been clicked. if the div element isn't empty, an answer is currently being displayed so we need to replace that to prevent multiple answers on the page.
            if (answer.childNodes.length === 0 ) {
                // create new p tag
                const hTag = document.createElement("h4");
                hTag.setAttribute("id", "cat-answer");
                hTag.textContent = data;

                // append new p tag to answer-card div
                answer.appendChild(hTag);
            } else {
                // pull page elements
                const hTagExisting = document.getElementById("cat-answer");

                // remove previous answer from the cat and assign it a new value (answer from the cat)
                hTagExisting.textContent = "";
                hTagExisting.textContent = data;
            }
    });
};


askTheCatBtn.addEventListener('click', getAnswer);