function close() {
    $(".sitings").style.display="none"
}
let menuStat = 0;
let promo = 25;
let short = 5
let long = 25
let und = "good"
let min = 0;
let soc = 0;
if(window.localStorage.getItem("font") != undefined || window.localStorage.getItem("color") != undefined) {
und = "und"
}
document.body.style.background = window.localStorage.getItem(`color${window.localStorage.getItem("color")}`)
document.body.style.fontFamily = window.localStorage.getItem(`font${window.localStorage.getItem("font")}`)
function font(num) {
let fontspan = document.getElementsByClassName("fontspan")
    for(let x =  0; x < 3; x++) {
        fontspan[x].style.background = "rgb(233, 233, 233)"
        fontspan[x].style.color = "black"
    }
    // console.log(num)
    fontspan[num].style.background = "black"
    fontspan[num].style.color = "white"
    window.localStorage.setItem("font", num);
    window.localStorage.setItem(`font${num}`, fontspan[num].getAttribute("font"));

}
function color(num) {
let colorSpan = document.getElementsByClassName("colorSpan")
    for(let m =  0; m < 3; m++) {
        colorSpan[m].classList.remove("check");
    }
    // console.log(num)
    colorSpan[num].classList.add("check");
    window.localStorage.setItem("color", num);
    window.localStorage.setItem(`color${num}`, colorSpan[num].getAttribute("color"));

}
function apply() {
window.localStorage.setItem('promo', document.getElementsByClassName("inputs")[0].value)
window.localStorage.setItem('short', document.getElementsByClassName("inputs")[1].value)
window.localStorage.setItem('long', document.getElementsByClassName("inputs")[2].value)
document.querySelector(".sitings").style.display="none";
document.body.style.background = window.localStorage.getItem(`color${window.localStorage.getItem("color")}`)
document.body.style.fontFamily = window.localStorage.getItem(`font${window.localStorage.getItem("font")}`)
}
function openSit() {
document.querySelector(".sitings").style.display="block"
    let colorSpan = document.getElementsByClassName("colorSpan")
    colorSpan[window.localStorage.getItem("color")].classList.add("check");

    let fontspan = document.getElementsByClassName("fontspan")
    fontspan[window.localStorage.getItem("font")].style.background = "black"
    fontspan[window.localStorage.getItem("font")].style.color = "white"
    // console.log(und)
    document.getElementsByClassName("inputs")[0].value = window.localStorage.getItem("promo")
    document.getElementsByClassName("inputs")[1].value = window.localStorage.getItem("short")
    document.getElementsByClassName("inputs")[2].value = window.localStorage.getItem("long")
if(und == "und") {
    window.localStorage.setItem("color", "0");
    console.log(und)
    window.localStorage.setItem("font", "0")
    window.localStorage.setItem("font0", "text")

    window.localStorage.setItem("promo", "25")
    window.localStorage.setItem("short", "5")
    window.localStorage.setItem("long", "30")
    und = "good"
}
}
function menu(num) {
menuStat = +num;
// console.log(+num)
// console.log(typeof +num)
for(let k = 0; k < 4; k++) {
    document.querySelectorAll(".menuSpan")[k].style.background = "transparent";
    document.querySelectorAll(".menuSpan")[menuStat].style.background = "#f67070";
}
}
let stop = "play"
function play() {

}
function pause() {

}
function timer() {
min = 25;
soc =  0;
let soc2 = 0;
let min2 = 0;
let p = document.querySelector(".timerp")

for(let x = 0; x < 1;) {
    if(soc == 0 && min > 0) {
        min = +min - 1
        soc = 60;
    }
    if(soc == 0 && min == 0) {
        x = 120
    }
    if(soc > 0) {
        soc = +soc - 1
    }
    if(min <= 9) {
        min2 = "0" + min
    } else {
        min2 = min
    }
    if(soc <= 9) {
        soc2 = "0" + soc 
    } else {
        soc2 = soc;
    }
    $(".timerp").text(`${min2}:${soc2}`)
    console.log(`${min2} : ${soc2}`)
}

}