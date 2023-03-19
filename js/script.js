let btnModalOffTwo = document.getElementById("modalOff-2")                                         
let btnModalOff = document.getElementById("modalOff")
let btnModalOn = document.getElementById("modal")
let modal = document.querySelector(".contacts__modal")
btnModalOn.onclick = function(){
    modal.style.display = "block"
}
btnModalOff.onclick = function(){
    modal.style.display = "none"
}
btnModalOffTwo.onclick = function(){
    modal.style.display = "none"
}
