function clickButton() {
    console.log('clicked button')
}

let HomeScore = 0
let AwayScore = 0


function updateDomH() {
    let elmH = document.getElementById('HomeScore')
    elmH.innerHTML = HomeScore
}

function updateDomA() {
    let elmA = document.getElementById('AwayScore')
    elmA.innerHTML = AwayScore
}

function clickHome7() {
    console.log('clicked home +7')
    HomeScore += 7
    updateDomH()
}

function clickHome3() {
    console.log('clicked home +3')
    HomeScore += 3
    updateDomH()
}

function clickAway7() {
    console.log('clicked away +7')
    AwayScore += 7
    updateDomA()
}

function clickAway3() {
    console.log('clicked away +3')
    AwayScore += 3
    updateDomA()
}

function resetScore() {
    HomeScore = 0
    AwayScore = 0
    updateDomA()
    updateDomH()
}