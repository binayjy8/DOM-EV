let btns = document.querySelectorAll("button");

for(btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log("you enter a button");
    }
}

function sayHello() {
    alert("Hi Baby");
}

function sayName () {
    alert("My Village");
}