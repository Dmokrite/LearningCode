const btn = document.getElementById("btn")
const box = document.getElementById("box")

let isVisible = true

btn.addEventListener("click", function(){
    if(isVisible){
        box.style.display= "none"
        //isVisible= false
    }else{
        box.style.display= "block"
        //isVisible = true
    }
    isVisible = !isVisible
})

box.addEventListener("copy", messageAfterCopy)

function messageAfterCopy(event){
    //console.log(event.target)  <===== target l'element reçu de messageAfterCopy via l'addEventlistener
}

