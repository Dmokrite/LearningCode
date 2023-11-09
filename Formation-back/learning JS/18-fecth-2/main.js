/*
*pour le fetch get/post/patch/delete
*/

/*
*GET ALL
*/

const cards = () => {
    fetch("http://localhost:3000/cards").then((response) =>
        response.json().then((data) => {
            console.log(data);
            data.map((card) => {
                const line = document.createElement("li");
                line.innerHTML = `<p>${card.first_name} ${card.last_name}</p>
                <img src="${card.imageUrl}" alt="${card.first_name} ${card.last_name}" width="100"/>
                <p>${card.comment}</p>`;
                list.appendChild(line);
            });
        })
    );
};

const list = document.querySelector(".list");
cards();

/*
*GET ONE
*/

const card = (id) => {
    fetch(`http://localhost:3000/cards/${id}`)  //get by id
    .then((response) => response.json()
    .then((card) => {
        console.log(card)
        oneCard.innerHTML = `<p>${card.first_name} ${card.last_name}</p>
                <img src="${card.imageUrl}" alt="${card.first_name} ${card.last_name}" width="100"/>
                <p>${card.comment}</p>`;
    }))
}
const oneCard = document.querySelector(".one");
card(2);

/*
* fetch POST
*/

const newCard = () => {
    fetch("http://localhost:3000/cards", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            number: 336,
            first_name: "John",
            last_name: "Doe",
            imageUrl: "https://lescrados.com/images/crados2/336.jpg"
        })
    })
}
const btnPost = document.getElementById("btn-post")
btnPost.addEventListener("click", (e) => {
    e.preventDefault()
    newCard()
})

/*
* fetch PATCH permet de modifier une donnée existante
*/

const patchCard = () => {
    fetch("http://localhost:3000/cards/9",{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            comment: "Pour avoir des bonnes notes"
        })
    })
}
const patchBtn = document.getElementById("btn-patch")
patchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    patchCard()
})

/*
* fetch DELETE
*/

const deleteCard = () => {
    fetch("http://localhost:3000/cards/9",{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
}
const btnDelete = document.getElementById("btn-delete")
btnDelete.addEventListener("click", (e) => {
    e.preventDefault()
    deleteCard()
})