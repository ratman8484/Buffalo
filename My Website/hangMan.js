let wordDis = document.getElementById("word")
let guessDisplay = document.getElementById("guesses")
guessDisplay.textContent = 'Press Start To Start'
let guesses = 10
let guess = document.getElementById("letterInput")
let word = ''
let arr = []



function startRound() {
    word = chooseWords()
    arr = makeArray(word)
    printDisplay(arr)
    guesses = 10
    guessDisplay.textContent = `Guesses left: ${guesses}`
}

guess.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        guessLetter()
    }
});

function printDisplay(str) {
    wordDis.textContent = str.join('');
    /*wordDis.textContent = ""
    for(var i = 0; i < str.length; i++) {
        wordDis.textContent += str[i]
    }*/
}

function chooseWords() {
    const words = 
    [
        'cat', 'dog', 'zebra', 'giraffe', 'fallout', 'diet', 'gyro', 'hang', 'man', 
        'start', 'apple', 'orange', 'blue', 'five', 'array', 'pie', 'fifteen', 'service',
        'sky', 'backspace', 'bigmac', 'juice', 'cairo', 'dent', 'car', 'truck', 'spore',
        'hat', 'print', 'spider', 'arachnid', 'soda', 'water', 'tough', 'rough', 'lucky',
        'comma', 'driver', 'taxi', 'alphabet','mouse', 'rat', 'zealot', 'zebra', 'piano',
        'coin', 'cent', 'dollar', 'cartoon', 'television', 'snoopy', 'is', 'my', 'amazing', 'pet'
    ]
    return words[randomInt(words.length)]
}

function makeArray(str) {
    var arr = []
    for(var i = 0; i < str.length; i++) {
        arr.push('_')
    }
    return arr
}

function randomInt(max) {
    return Math.floor(Math.random()*max)
}
function checkFinished(array) {
    var done = null;
    for(var i = 0; i < array.length; i++) {
        if(array[i] == '_') {
            i = array.length
            done = false
        } else {
            done = true
        }
    }
    return done;
}

//This function checks if the letter in the guess bar is in the word
function guessLetter() {
    //This is to check if there is something in the guess bar
    if(guess.value != "" && word != '')
    {
        if(guesses >= 1) {
            //If the guess is in the wordc
            if(word.indexOf(guess.value) != -1) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === guess.value) {
                        arr[i] = guess.value;
                    }
                }
                //arr[word.indexOf(guess.value)] = guess.value  
            } else {
                guesses--
                guessDisplay.textContent = `Guesses left: ${guesses}`
            }

            if(checkFinished(arr) == true) {
                guessDisplay.textContent = "CONGRATS!!"
            }
            
            printDisplay(arr)
            
            guess.value = ""
        } else {
            wordDis.textContent = word
            word = ''
            guessDisplay.textContent = 'You Lost!'
            guess.value = ""
        }
    }
}