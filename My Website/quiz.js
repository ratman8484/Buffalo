const input = document.getElementById('answerInput');
const question = document.getElementById('question');
const answerRow = document.getElementById('answerRow');
const answerTable = document.getElementById('answerTable')
let slots = []

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        guessAnswer(input.value)
    }
});

function randomInt(max) {
    return Math.floor(Math.random()*max)
}

function randomQuiz() {
    let premadeQuizes = 
    [
        ["McDonalds Menu Items (Individual Items)", ['mcdouble','doublehamburger','filetofish','mcchicken','bigmac', 'hamburger', 'cheeseburger', 'chickenmcnuggets', 'fries', 'eggmcmuffin', 'hashbrowns', 'quarterpounder']],
        ["Fallout Factions", ["newcaliforniarepublic", "brotherhoodofsteel", "ceaserslegion","followersoftheapocalypse","theinstitute","therailroad","themastersarmy"]]
    ]

    var rand = randomInt((premadeQuizes.length))
    createQuiz(premadeQuizes[rand][0], premadeQuizes[rand][1])
}

function createQuiz(ques, answers) {
    for(var i = 0; i < slots.length; i++) {
        const elem = document.getElementById(slots[i][0]);
        if (elem) elem.remove();
    }
    question.textContent = ques;
    var arr = []
    for(var i = 0; i < answers.length; i++) {
        arr.push([String(i), answers[i]])  
         let elem = document.createElement('td')
        answerRow.appendChild(elem)
        elem.id = String(i)
    }
    slots = arr
}

function guessAnswer(guess) {
    for(var i = 0; i < slots.length; i++) {
        let answer=slots[i][1]
        if(answer.includes(guess) && guess.length >= answer.length/2) {
            var spot= document.getElementById(slots[i][0])
            spot.textContent = slots[i][1]
            spot.style = 'background-color: green;'
            input.value=''
        }
    }
}
