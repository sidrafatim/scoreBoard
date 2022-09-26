let homeCount = 0
let guestCount = 0
let newCount = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function addOne() {
    homeCount += 1
    homeScoreEl.textContent = homeCount
}

function addTwo() {
    homeCount += 2
    homeScoreEl.textContent = homeCount
}

function addThree() {
    homeCount += 3
    homeScoreEl.textContent = homeCount
}

function add1() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
}

function add2() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
}

function add3() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
}

function newGame() {
    homeScoreEl.textContent = newCount
    guestScoreEl.textContent = newCount
    homeCount = 0
    guestCount = 0
    
}