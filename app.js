let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function () {
//     console.log("button was clicked");
// }

function sayHello() {
    alert("Hi Baby");
}

btn.onclick = sayHello;