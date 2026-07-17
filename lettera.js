const openLetter = document.getElementById("openLetter");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");

const finalLetter = `Anni fa mi chiedevo cosa significasse davvero vivere la vita dei sogni e, soprattutto, come si facesse a capire quando finalmente ci sei arrivato.

Oggi posso rispondere.

Per la prima volta nella mia vita non desidero più nulla, perché sento di aver già guadagnato tutto.

L'estate, la moto... ma soprattutto tu.

Sei la cosa per cui ho lottato di più, quella per cui non ho mollato per anni.

E alla fine ce l'ho fatta.

Grazie a te sto vivendo la vita dei miei sogni, perché la verità è che eri tu il mio sogno.

Sei riuscita a rendermi felice in un modo che non avrei mai immaginato.

Ti amo ❤️`;

openLetter.addEventListener("click", () => {

    envelope.classList.add("opened");

    letter.style.display = "block";

    letterText.innerHTML = "";

    let i = 0;

    function writeLetter() {

        if (i < finalLetter.length) {

            letterText.innerHTML += finalLetter.charAt(i);
            i++;
            setTimeout(writeLetter, 35);

        }  else {

        setTimeout(() => {

            document
            .getElementById("signature")
            .classList.add("show");

        },2000);

    }

    }

    writeLetter();

});

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";


    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
    (Math.random() * 3 + 3) + "s";


    document.getElementById("hearts").appendChild(heart);


    setTimeout(() => {

        heart.remove();

    },6000);

}



setInterval(createHeart,300);
