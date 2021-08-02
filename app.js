let p1Display = document.querySelector('#p1s');
let p2Display = document.querySelector('#p2s');
let p1Button = document.querySelector('#p1b');
let p2Button = document.querySelector('#p2b');
let resetB = document.querySelector('#reset');
let p1score = 0;
let p2score = 0;
let winningScore = 3;
let state = false;

p1Button.addEventListener('click', () => {
    checkB1();
    if (p1score < winningScore) {
        p1score++;
        p1Display.innerText = p1score;
    }
})
p2Button.addEventListener('click', () => {
    checkB2();
    if (p2score < winningScore) {
        p2score++;
        p2Display.innerText = p2score;
    }
})
resetB.addEventListener('click', () => {
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Display.style.color = 'black';
    p2Display.style.color = 'black';
    p1score = 0;
    p2score = 0;
})
function checkB1() {
    if (p1score === winningScore - 1) {
        state = true;
        p1Display.style.color = 'green';
        p2Display.style.color = 'red';
        p1Button.disabled = true;
    }
}
function checkB2() {
    if (p2score === winningScore - 1) {
        state = true;
        p1Display.style.color = 'red';
        p2Display.style.color = 'green'
        p2Display.classList.add('win');
        p2Button.disabled = true;
    }
}
