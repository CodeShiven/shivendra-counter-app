let count = 0

const counter = document.getElementById("counter")

function increase() {
    count++
    counter.innerHTML = count
}

function decrease() {
    count--
    counter.innerHTML = count
}

function reset() {
    count = 0
    counter.innerHTML = count
}