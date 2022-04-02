const counter = document.querySelector('.counter')
const increaseButton = document.querySelector('.increase')
const resetButton = document.querySelector('.reset')
const decreaseButton = document.querySelector('.decrease')

let count = 0

increaseButton.addEventListener('click', () => {
    count += 1;
    counter.textContent = count;
});

decreaseButton.addEventListener('click', () => {
    count -= 1;
    counter.textContent = count;
});

resetButton.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
});