let p1Display = document.querySelector('#p1s');
let p2Display = document.querySelector('#p2s');
let p1Button = document.querySelector('#p1b');
let p2Button = document.querySelector('#p2b');
let resetB = document.querySelector('#reset');
let scoreSelect = document.querySelector('#ScoreSelect')
let p1score = 0;
let p2score = 0;
let winningScore = 3;
let state = false;

scoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})
const reset = () => {
    state = false;
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1score = 0;
    p2score = 0;
}
p1Button.addEventListener('click', () => {
    if (state === false) {
        p1score++;
        if (p1score === winningScore) {
            state = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
        }
        p1Display.innerText = p1score;
    }
})
p2Button.addEventListener('click', () => {
    if (state === false) {
        p2score++;
        if (p2score === winningScore) {
            state = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
        }
        p2Display.innerText = p2score;
    }
})
resetB.addEventListener('click', reset)

// function checkB1() {
//     if (p1score === winningScore - 1) {
//         state = true;
//         p1Display.style.color = 'green';
//         p2Display.style.color = 'red';
//         p1Button.disabled = true;
//     }
// }
// function checkB2() {
//     if (p2score === winningScore - 1) {
//         state = true;
//         p1Display.style.color = 'red';
//         p2Display.style.color = 'green'
//         p2Button.disabled = true;
//     }
// }
