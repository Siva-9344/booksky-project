//selecting popup-box, popup-overlay, button

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"

})

// select cancel button
var cancelpopup = document.getElementById("cancel-up")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

// select the container,add-book,book-tittle-input,book-author-input,book-description-input

var container = document.querySelector (".container")
var addbook = document.getElementById("add-book")
var booktittleinput = document.getElementById("book-tittle-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")


addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktittleinput.value}</h2>
    <h5 style = "color:#fd6569">${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick = "deletebook(event)">Delete</button>
`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

function deletebook(event)
{
    event.target.parentElement.remove()
}