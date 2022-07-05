let homeLink = document.querySelector('.homeLink')
let universeLink = document.querySelector('.universeLink')
let explorerLink = document.querySelector('.explorerLink')

function activeHome() {
    if (homeLink.classList.contains('active')) {
        universeLink.classList.remove('active')
        explorerLink.classList.remove('active')
    } else {
        homeLink.classList.add('active')
        universeLink.classList.remove('active')
        explorerLink.classList.remove('active')
    }
}

function activeUniverse() {
    if (universeLink.classList.contains('active')) {
        homeLink.classList.remove('active')
        explorerLink.classList.remove('active')
    } else {
        universeLink.classList.add('active')
        homeLink.classList.remove('active')
        explorerLink.classList.remove('active')
    }
}


function activeExplorer() {
    if (explorerLink.classList.contains('active')) {
        universeLink.classList.remove('active')
        homeLink.classList.remove('active')
    } else {
        explorerLink.classList.add('active')
        universeLink.classList.remove('active')
        homeLink.classList.remove('active')
    }
}

function activeLoad() {
    let pathnameteste = window.location.pathname

    if(pathnameteste == "/universo") {
        universeLink.classList.add('active')
        homeLink.classList.remove('active')
        explorerLink.classList.remove('active')
    } else if (pathnameteste == "/exploracao") {
        explorerLink.classList.add('active')
        universeLink.classList.remove('active')
        homeLink.classList.remove('active')
    } else {
        homeLink.classList.add('active')
        universeLink.classList.remove('active')
        explorerLink.classList.remove('active')
    }
}

activeLoad()