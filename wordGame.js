window.addEventListener("load", init)

//Global Variables -- Variables that can be used throughout the code including functions

//Available Levels
const levels = {
    easy: 10,
    medium: 5,
    hard: 2,
}

// To change level 
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
    "postpartum",
    "self care",
    "grace",
    "health",
    "maternal",
    "professional",
    "care provider",
    "care coordinator",
    "resources",
    "access",
    "beautiful",
    "exposure",
    "behavior",
    "weathering",
    "sasuke",
    "orochimaru",
    "rock lee",
    "choji",
];

// Initialize game
function init() {
    console.log("init");
    //Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    //load word from word array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    //game status
    setInterval(checkStatus, 50);
}
// Start match
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    scoreDisplay.innerHTML = score;
}

//Match currentWord to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!';
        return true;
    }   else {
        message.innerHTML = '';
        return false;
    }

}

//Pick and display random word
function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}


//Countdown Timer
function countdown() {
    if(time > 0){
        time--;
    } else if(time === 0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

//Checking Game Status
function checkStatus() {
    if(!isPlaying && time === 0){
        message.innerHTML = "Failure is not fatal- it is the courage to continue that counts. Try again!";
        score = 0;
    }
}
    
    
