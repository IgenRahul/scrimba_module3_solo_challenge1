let homePoints = 0;
let guestPoints = 0;
let homeScore = document.getElementById("home-points");
let guestScore = document.getElementById("guest-points");
homeScore.textContent = homePoints;
guestScore.textContent = guestPoints;
function homeAdd(score) {
    homePoints += score;
    homeScore.textContent = homePoints;
}
function guestAdd(score) {
    guestPoints += score;
    guestScore.textContent = guestPoints;
}
