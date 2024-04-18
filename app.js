const plus = document.getElementById("plus")
const cartItems = document.getElementById("cart-items")
const numberOfItemsElement = document.getElementById("rt")
const bigThumbnail = document.getElementById("up")
const thumbnails = document.getElementsByClassName("thumbnail")
const hidebtn = document.querySelector("#cls")
const menu = document.querySelector(".menu-icon")


let numberOfItems = numberOfItemsElement.value
plus.addEventListener("click", increment)
menu.addEventListener("click", toggleMenu)
hidebtn.addEventListener("click", toggleMenu)

function toggleMenu(e) {
    console.log(e);
    const nav = document.querySelector("nav")
    nav.classList.toggle("hiden")
}

function increment() {
    numberOfItemsElement.value = +numberOfItemsElement.value + 1
    cartItems.textContent = numberOfItemsElement.value
    document.querySelector(".numberOfItems").textContent = numberOfItemsElement.value
    const price = document.querySelector(".product-price").textContent
    const totalPrice = numberOfItemsElement.value * price
    document.querySelector(".total-price").textContent = "$ "+totalPrice
    
}
function decrement() {
    numberOfItemsElement.value = -numberOfItemsElement.value + 1
    document.querySelector(".numberOfItems").textContent = numberOfItemsElement.value
    const totalPrice = numberOfItemsElement.value * price 
    document.querySelector(".total-price").textContent = "$ "+totalPrice
    
}
const cok = document.getElementById("cok")
//when you declare above
// const numberOfItemsElement=document.getElementById("rt")
// let numberOfItems
cok.addEventListener("click", decrement)

function decrement() {
    if (+numberOfItemsElement.value <= 0) return
    numberOfItemsElement.value = +numberOfItemsElement.value - 1
    cartItems.textContent = numberOfItemsElement.value
}

for (let i = 0; i < thumbnails.length; i++) {
    const thumbnail = thumbnails[i]

    thumbnail.addEventListener("click", setThumbnail)
}

function setThumbnail() {
    bigThumbnail.src = this.src
}