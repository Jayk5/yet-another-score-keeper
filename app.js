// let p1Display = document.querySelector('#p1s');
// let p2Display = document.querySelector('#p2s');
// let p1Button = document.querySelector('#p1b');
// let p2Button = document.querySelector('#p2b');
let resetB = document.querySelector('#reset');
let scoreSelect = document.querySelector('#ScoreSelect')
// let p1score = 0;
// let p2score = 0;
let winningScore = 3;
let state = false;

p1 = {
    score: 0,
    display: document.querySelector('#p1s'),
    button: document.querySelector('#p1b'),
}
p2 = {
    score: 0,
    display: document.querySelector('#p2s'),
    button: document.querySelector('#p2b'),
}

function clickB(player, opponent) {
    if (state === false) {
        player.score++;
        if (player.score === winningScore) {
            state = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
        }
        player.display.innerText = player.score;
    }
}

scoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})
const reset = () => {
    state = false;
    p1.display.innerText = 0;
    p2.display.innerText = 0;
    p1.button.disabled = false;
    p2.button.disabled = false;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    p1.score = 0;
    p2.score = 0;
}
p1.button.addEventListener('click', () => {
    clickB(p1, p2);
});
p2.button.addEventListener('click', () => {
    clickB(p2, p1);
});
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
