let p1Display = document.querySelector('#p1s');
let p2Display = document.querySelector('#p2s');
let p1Button = document.querySelector('#p1b');
let p2Button = document.querySelector('#p2b');
let resetB = document.querySelector('#reset');
let p1score = 0;
let p2score = 0;
let winningScore = 3;
p1Button.addEventListener('click', () => {
    if (p1score < winningScore) {
        p1score++;
        p1Display.innerText = p1score;
    }
})
p2Button.addEventListener('click', () => {
    if (p2score < winningScore) {
        p2score++;
        p2Display.innerText = p2score;
    }
})
resetB.addEventListener('click', () => {
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1score = 0;
    p2score = 0;
})