var questions = [
    {q: "What does SEO mean?", a:"Search Engine Operation", b:"Search Extra Organization", c: "Silver External Object", d:"Super Enormous Objecy"},
    {q: "In HTML which one of the headers will have the largest font?", a: "H6", b: "H4", c: "H1", d: "H2"},
    {q: "What CSS property do we use to move objects into columns?",a: "Wrap", b: "Flexbx", c: "Align Item", d: "Sticky" },
    {q: "If Javascipt makes a webpage move, what does CSS do?", a: "Structure of the webpage", b: "Let's a developer interact with a visitor of the page",
    c:"Make's the webpage pretty and look better", d: "It does nothing! We are in the Matrix and what we do doesn't matter!!"},
    {q: "What is the function of an array?", a:"It's designed to store data as a list", b: "It's designed to store unwanted data", c: "It's designed to store elements of the webpage",
     d:"It's designed to store your keys, your pills, and other household applicances"}
];

var score = 0;

for (var i = 0; i < questions.length; i++) {

}
function startQuiz() {
    documment.getElementById("start-button").click();
}

function resetQuiz() {
    document.getElementById("restart").click();
}

//Timer
var timeLeft = 30; 
var elem = document.getElementById("timer");
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
    } else {
      elem.innerHTML = timeLeft + 'seconds remaining';
      timeLeft--;
    }
} 
function doSomething () {
    alert("Game Over!");
}

