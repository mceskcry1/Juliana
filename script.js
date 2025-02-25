// Frases que se cambiarán al hacer clic en el botón
const frases = [
    "Eres muy hermosa.",
    "Siempre brillas, Juliana.",
    "Tu sonrisa ilumina mi vida.",
    "El mundo es mejor con tu presencia.",
    "Tienes un corazón tan grande como tu belleza.",
    "Cada vez que te veo, me siento afortunado aunque sea por mensajes.",
    "Tu mirada tiene algo mágico.",
    "Cada palabra tuya es música para mis oídos.",
    "Eres la razón de muchas sonrisas.",
    "Nunca dejes de ser tú misma.",
    "Tu dulzura hace que todo a tu alrededor brille.",
    "Cada momento contigo sería mi mayor regalo.",
    "Eres el sueño hecho realidad.",
    "Tu alegría es contagiante.",
    "Tu belleza trasciende, Juliana.",
    "La verdadera amistad existe y te he encontrado a ti.",
    "Cada día que pasara contigo sería un sueño hecho realidad.",
    "Lo que más me gusta de ti es tu alma hermosa.",
    "Me encanta la forma en que haces todo tan especial.",
    "Juliana, eres mi felicidad."
];

// Cambiar la frase mostrada al hacer clic en el botón
const changeFraseButton = document.getElementById('change-frase-button');
const fraseDisplay = document.getElementById('frase-display');

changeFraseButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    fraseDisplay.textContent = frases[randomIndex];
});

// Cambiar el color del fondo y el texto de la frase al hacer clic
document.getElementById("frase-display").addEventListener("click", () => {
    fraseDisplay.style.backgroundColor = "#00bcd4"; // Celeste
    fraseDisplay.style.color = "#000"; // Letras oscuras para contraste
});
