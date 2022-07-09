// h1
let h1 = document.createElement("h1");
h1.innerText = "Background Gen";
document.body.append(h1);

// h4
const h4 = document.createElement("h4");
h4.innerText = "Pick A Color, Any Color";
document.body.append(h4);

// color1
let color1Input = document.createElement("input");
color1Input.className = "color1";
color1Input.type = "color";
color1Input.name = "color1";
color1Input.value = "#00cc00";
document.body.append(color1Input);

// color2
let color2Input = document.createElement("input");
color2Input.className = "color2";
color2Input.type = "color";
color2Input.name = "color2";
color2Input.value = "#ffcc00";
document.body.append(color2Input);

// h2
let h2 = document.createElement("h2");
h2.innerText = "Current CSS Background";
document.body.append(h2);

// h3
let h3 = document.createElement("h3");
h3.innerText = "linear-gradient(to right, rgb(123, 252, 3) , rgb(148, 50, 70));";
document.body.append(h3);

// button
let button = document.createElement("button");
button.innerText = "Randomizer";
button.id = "random";
button.type = "button";
button.className = "btn btn-success";
document.body.append(button);


let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
var btn = document.getElementById("random");


//i set a colors' value in style.css file.

color1.setAttribute("value", getRandomColor()) 
color2.setAttribute("value", getRandomColor())

body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value +")";
css.textContent = body.style.background + ";"

let currentColorset = () => {
    body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value +")";
    css.textContent = body.style.background + ";";
}

//gives random hex code (taken by stackoverflow)

let getRandomColor = () => {
    var letters = '0123456789ABCDEF'.split('');
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    
    return color;
}


// random codes setted and initialized the currentColorset function

setGradientRandom = () => {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	currentColorset()
} 


color1.addEventListener("input", currentColorset)
color2.addEventListener("input", currentColorset)
btn.addEventListener("click", setGradientRandom);

