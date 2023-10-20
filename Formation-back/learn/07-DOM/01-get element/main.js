const div = document.getElementById('Hello')
console.log(div)

div.innerText= "Salut"
div.innerHTML= "<h1>Salute</h1>"

div.style.color="chartreuse"
//div.style.backgroundColor="burlywood"
div.classList.add("error")

const pArray = document.getElementsByTagName("p")
for (let p of pArray){
    p.style.color="chartreuse"
}

const classes = document.getElementsByClassName("world")
for(let item of classes){
    item.style.color="fuchsia"
}

const mySuper = document.querySelector(".super")
const link = document.querySelectorAll("nav > ul > li .link")
