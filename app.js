// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.onmouseenter = function () {
//     //     console.log("you enter a button");
//     // }

//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
// }

// function sayHello() {
//     alert("Hi Baby");
// }

// function sayName () {
//     alert("My Village");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function (){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//     console.log("color updated");
// });


// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

let btn = document.querySelector("button");

btn.addEventListener("click", function (event) {
    console.log(event);
    console.log("button was clicked");
});