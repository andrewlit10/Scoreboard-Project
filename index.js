let homeCurrentScoreValue = document.querySelector(".home-current-score");
let guestCurrentScoreValue = document.querySelector(".guest-current-score");
let homeCurrentScore = 0;
let guestCurrentScore = 0;
let homeOne = document.querySelector(".home-1");
let homeTwo = document.querySelector(".home-2");
let homeThree = document.querySelector(".home-3");
let guestOne = document.querySelector(".guest-1");
let guestTwo = document.querySelector(".guest-2");
let guestThree = document.querySelector(".guest-3");

function homeReset() {
    homeCurrentScoreValue.textContent = 0;
    homeCurrentScore = 0;
}
function guestReset() {
    guestCurrentScoreValue.textContent = 0;
    guestCurrentScore = 0;
}
function addHomeOne() {
    homeCurrentScore ++;
    homeCurrentScoreValue.textContent = homeCurrentScore;

}
function addHomeTwo() {
    homeCurrentScore += 2;
    homeCurrentScoreValue.textContent = homeCurrentScore;

}
function addHomeThree() {
    homeCurrentScore += 3;
    homeCurrentScoreValue.textContent = homeCurrentScore;

}
function addGuestOne() {
    guestCurrentScore ++;
    guestCurrentScoreValue.textContent = guestCurrentScore;

}
function addGuestTwo() {
    guestCurrentScore += 2;
    guestCurrentScoreValue.textContent = guestCurrentScore;

}
function addGuestThree() {
    guestCurrentScore += 3;
    guestCurrentScoreValue.textContent = guestCurrentScore;

}