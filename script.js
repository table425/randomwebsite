//CHANGE THE VALUE OF THIS VARIABLE TO CHANGE HOW LONG THE SITES NAME CAN BE
//THE LOWER THE BETTER CHANCE OF GETTING A REAL SITE

let MAXLENGTH = 3

//dont change this stuff or ill obfuscate it

let char
let rand
function randchar() {
rand = Math.floor(Math.random()*26)
if (rand === 1) {
    char = "a"
}
if (rand === 2) {
    char = "b"
}
if (rand === 3) {
    char = "c"
}
if (rand === 4) {
    char = "d"
}
if (rand === 5) {
    char = "e"
}
if (rand === 6) {
    char = "f"
}
if (rand === 7) {
    char = "g"
}
if (rand === 8) {
    char = "h"
}
if (rand === 9) {
    char = "i"
}
if (rand === 10) {
    char = "j"
}
if (rand === 11) {
    char = "k"
}
if (rand === 12) {
    char = "l"
}
if (rand === 13) {
    char = "m"
}
if (rand === 14) {
    char = "n"
}
if (rand === 15) {
    char = "o"
}
if (rand === 16) {
    char = "p"
}
if (rand === 17) {
    char = "q"
}
if (rand === 18) {
    char = "r"
}
if (rand === 19) {
    char = "s"
}
if (rand === 19) {
    char = "t"
}
if (rand === 20) {
    char = "u"
}
if (rand === 21) {
    char = "v"
}
if (rand === 22) {
    char = "w"
}
if (rand === 23) {
    char = "x"
}
if (rand === 24) {
    char = "y"
}
if (rand === 25) {
    char = "z"
}
if (rand === 26) {
    char = "e"
}
return char;
}
function neww() {
let webs = "https://"
for (let i = 0; i < Number(document.querySelector(".inp").value); i++) {
    webs = webs + randchar()
}
console.log(webs + ".com")
document.querySelector("title").innerText = "Random Website | " + webs+".com"
document.querySelector(".tt").innerText = webs + ".com"
document.querySelector(".fram").src=webs+".com"
}