/**
 * 1. Deposit some money
 * 2. Determine number of lines to bet on
 * 3. Collect a bet amount
 * 4. Spin the slot machine
 * 5. Check if the user won
 * 6. If user wins, give their winnings
 * 7. Play again
 * 
 */

const prompt = require("prompt-sync")();
const bet = getBet(balance, numberOfLines)

const ROWS = 3
const COLS = 3

// There are two ways to write a function in js. 
// First way
// function deposit(){
//     return 1
// }

// Second way, more modern way -- latest

const deposit = () => {

    while(true) {

        const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount) 

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, Please try again...")

        } else {
            return numberDepositAmount
        }
    }
}
const name = "muralikrishnan"
const getNumberOfLines = () => {

    while(true) {

        const lines = prompt("Enter the number of lines to bet on (1-3): ")
        const numberLines = parseInt(lines)

        if (isNaN(numberLines) || numberLines <= 0 || numberLines > 3) {
            console.log("Invalid bet line, Please try again...")

        } else {
            return numberLines
        }
    }
}

const getBet = (balance, lines) => {

    while(true) {

        const bet = prompt("Enter the total bet amount per line: ")
        const numberBet = parseInt(bet)

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet amount, Please try again...")

        } else {
            return bet
        }
    }
}

let balance = deposit()
const numberOfLines = getNumberOfLines()



let newLines = deposit()









