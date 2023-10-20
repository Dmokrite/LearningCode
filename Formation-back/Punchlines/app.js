"use strict"

const punchlines = [
  "Le coup le plus rusé que le diable ait jamais réussi, c’est de faire croire à tout le monde qu’il n’existait pas.",
  "J'ai perdu ma mère ce matin... -Elle est morte ?– Non non je l’ai perdue, c’est-à-dire que je l’ai perdue, elle était là et pouf ! pouf ! Je l’ai perdue…",
  "Vous voulez un Whisky ? – Juste un doigt. – Vous voulez pas un Whisky d’abord ?",
  "Si je ne suis pas de retour dans 5 minutes... Attendez plus longtemps !",
  "Pigeon, oiseau à la grise robe / dans l’enfer des villes / à mon regard tu te dérobes... / Tu es vraiment le plus agile.",
  "J'm'appelle Bernie Noël, j'ai 29 ans bientôt 32. Je... Je suis député. Je possède un chat, Momo. Momo est un chat depuis de nombreuses années mais c'est également un félin. Voilà c'est Momo... kikikikikik..",
  "Avoir l'air d'un faux-jeton à ce point-là, j'te jure que c'est vraiment de la franchise !",
  "Les miroirs feraient bien de réfléchir un peu plus avant de renvoyer les images.",
  "Tu vois, le monde se divise en deux catégories, ceux qui ont un pistolet chargé et ceux qui creusent. Toi, tu creuses.",
  "Ou tu sors, ou j'te sors, hein, mais faudra prendre une décision.",
  "Ma main à couper qu'ça va encore tourner autour du trou de balle c't'histoire ! Identité sexuelle !",
  "Je sais que j'plais pas à tout le monde, mais quand j'vois à qui j'plais pas, je m'demande si ça me dérange vraiment",
  "Si tu veux un conseil, oublie que t'as aucune chance. On sait jamais, sur un malentendu ça peut marcher.",
  "J'ignorais que tu savais piloter un avion. - Piloter, oui. Atterrir, non.",
  "Quand on parle pognon, à partir d’un certain chiffre, tout le monde écoute.",
  "La vérité c’est comme une couverture trop petite. Tu peux tirer dessus de tous les côtés, tu auras toujours les pieds froids.",
  "Les cons ça ose tout. C’est même à ça qu’on les reconnait"
]

const btn = document.querySelector("#next")
btn.addEventListener("click", work)
const texte = document.querySelector("#punchline")

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function work() {
  let i = getRandomInt(0, 16)
  texte.textContent = punchlines[i]

  let rgb1 = getRandomInt(0, 150)
  let rgb2 = getRandomInt(0, 150)
  let rgb3 = getRandomInt(0, 150)

  const rgbColor = `rgb(${rgb1},${rgb2},${rgb3})`

  document.querySelector("body").style.backgroundColor = rgbColor
  document.querySelector("#punchline").style.color = rgbColor
  document.querySelector("#next").style.backgroundColor = rgbColor
}
