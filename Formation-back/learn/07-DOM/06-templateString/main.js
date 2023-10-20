const nom = "bruno"
const habitation = "chateau"

// console.log("Bonjour je suis " +nom+ " et j'habites dans un " + habitation) <==== ancienne manière d'écrire, nouvelle façon juste en dessous avec les ${}
console.log(`Bonjour je suis ${nom} et j'habites dans un ${habitation}`)

const user = {
    "firstName" : "Bruno",
    "job": "Boulanger",
    "city": "Madrid",
    "citation": "S'il pleut pas, c'est qu'il fera beau"
}

const markup = `
<h1>
${user.firstName}
<em>${user.city}</em>
</h1>
<p class="Bruno">
${user.job}
</p>
<p>
${user.citation}
</p>
`
document.getElementById("output").innerHTML = markup


