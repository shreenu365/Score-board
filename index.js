
let homeCount = 0;
let guestCount = 0;
let homePara = document.getElementById("home-score");
let guestPara = document.getElementById("guest-score");
console.log(guestPara)

function homeScore1(){
    homeCount += 1;
    homePara.innerText = homeCount;
}

function homeScore2(){
    homeCount += 2;
    homePara.innerText = homeCount;
}

function homeScore3(){
    homeCount += 3;
    homePara.innerText = homeCount;
}


function guestScore1(){
    guestCount += 1;
    guestPara.innerText = guestCount;
}

function guestScore2(){
    guestCount += 2;
    guestPara.innerText = guestCount;
}

function guestScore3(){
    guestCount += 3;
    guestPara.innerText = guestCount;
}

console.log(guestCount)

