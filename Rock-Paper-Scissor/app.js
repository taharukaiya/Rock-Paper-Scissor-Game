let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById('userScore')
const computerScore_span = document.getElementById('computerScore')
const scoreBoard_div = document.querySelector('.scoreBoard')
const result_div = document.querySelector('.result')
const rock_div = document.querySelector('#rock')
const paper_div = document.querySelector('#paper')
const scissor_div = document.querySelector('#scissor')


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function convert(word) {
    if (word === 'rock') {
        return 'Rock'
    } else if (word === 'paper') {
        return 'Paper'
    } else {
        return 'Scissor'
    }
}

function win(user, computer) {
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML = convert(user) + ' beats ' + convert(computer) + ', You Win! 🔥'
    document.getElementById(user).classList.add('green-glow')
    setTimeout(() =>
        document.getElementById(user).classList.remove('green-glow'), 500)
}

function lose(user, computer) {
    computerScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML = convert(computer) + ' beats ' + convert(user) + ', You lost! 👎🏼'
    document.getElementById(user).classList.add('red-glow')
    setTimeout(() =>
        document.getElementById(user).classList.remove('red-glow'), 500)
}

function draw(user, computer) {
    result_div.innerHTML = 'It\'s a Draw!'
    document.getElementById(user).classList.add('yellow-glow')
    setTimeout(() =>
        document.getElementById(user).classList.remove('yellow-glow'), 500)
}

function game(userChoice) {
    let computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            win(userChoice, computerChoice)
            break
        case 'rockpaper':
        case 'paperscissor':
        case 'scissorrock':
            lose(userChoice, computerChoice)
            break
        case 'rockrock':
        case 'ppaperpaper':
        case 'scissorscissor':
            draw(userChoice, computerChoice)
            break
    }
}

function main() {
    rock_div.addEventListener('click', () => game('rock'))
    paper_div.addEventListener('click', () => game('paper'))
    scissor_div.addEventListener('click', () => game('scissor'))
}

main()