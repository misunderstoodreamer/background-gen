// TODO:
// bootstrap lokalde calissin
// html body içerisindeki bütün bilgileri js içine al
// css'i tamamen js içine alıp css dosyasini kaldir



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

let event1 = function(){
    body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value +")";
    css.textContent = body.style.background + ";";
}
//document.appendChild()
//gives random hex code (taken by stackoverflow)

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    
    return color;
}


// random codes setted and initialized the event1 function

function setGradientRandom() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	event1()
} 


color1.addEventListener("input", event1)
color2.addEventListener("input", event1)
btn.addEventListener("click", setGradientRandom);
// space basinca da btn aktif olsun
