// pull page elements
const catFactsList = document.querySelector('#catFacts-list');
const form = document.querySelector('form');

// for deployment
const PORT = process.env.PORT || 4000;

// set API to variable (local only)
// const baseURL = `http://localhost:4000/api/catfacts`;


// axios requests
const factsCallback = ({ data: catFacts }) => displayCatFacts(catFacts);

const getAllFacts = () => axios.get(PORT, `/api/catfacts`).then(factsCallback);

const editCatFact = (id, type) => axios.put(PORT, `/api/catfacts/${id}`, {type}).then(factsCallback);

const addCatFact = body => axios.post(PORT, `/api/catfacts`, body).then(factsCallback);


// takes care of form submission
function submitHandler(e) {
    e.preventDefault()

    let fact = document.querySelector('#fact-text');

    let bodyObj = {
        fact: fact.value,
    };

    addCatFact(bodyObj);

    fact.value = '';
}


// displays all cat facts on a neat little card
function createFactCard(catFact) {
    const factCard = document.createElement('div');
    factCard.classList.add('fact-card');
    rating = catFact.rating;

    // if statement that determines if the "paw" rating is singular or plural
    if (rating === 1) {
        factCard.innerHTML = `<p class="fact-text">${catFact.fact}</p>
    <div class="btns-container">
    <button onclick="editCatFact(${catFact.id}, 'plus')"><img src="images/cat-paw.png" id="paws"></button>
        <p class="fact-rating">This fact got ${catFact.rating} paws up!</p><br>
    </div>`
    } else {
        factCard.innerHTML = `<p class="fact-text">${catFact.fact}</p>
    <div class="btns-container">
    <button onclick="editCatFact(${catFact.id}, 'plus')"><img src="images/cat-paw.png" id="paws"></button>
        <p class="fact-rating">This fact got ${catFact.rating} paws up!</p><br>
    </div>`
    };

    catFactsList.appendChild(factCard);
}


// iterate through array to display all cat facts
function displayCatFacts(arr) {
    catFactsList.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createFactCard(arr[i])
    };
};


// form on cat-facts.html
form.addEventListener('submit', submitHandler);


getAllFacts();