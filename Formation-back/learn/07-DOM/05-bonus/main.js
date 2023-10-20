const square = document.getElementById("square")
const reset = document.getElementById("reset")
const preview = document.getElementById("preview")

square.addEventListener("click", createSquare)

function createSquare(){
    let box = document.createElement("div")

    box.style.width= "200px"
    box.style.height= "200px"
    box.style.backgroundColor= "blue"
    box.style.marginTop= "20px"

    preview.appendChild(box)
}

reset.addEventListener("click", function(){
    document.getElementById("preview").innerHTML = ""
})