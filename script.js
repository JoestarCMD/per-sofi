const button = document.getElementById("startButton");

const intro = document.querySelector(".intro");

const story = document.querySelector(".story");


const title = document.querySelector(".story h2");

const text = document.querySelector(".story p");



const firstText = "Sono entrato nel tuo cuore il 2 aprile 2026.";

const secondText = "Ma nel mio avevi già il tuo posto da tanto tempo.";



title.innerHTML = "";

text.innerHTML = "";



function typeWriter(element, text, speed) {

    let i = 0;


    function write() {

        if(i < text.length) {

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(write, speed);

        }

    }


    write();

}



button.addEventListener("click", () => {


    intro.classList.add("hide");


    setTimeout(() => {


        story.classList.add("show");


        typeWriter(title, firstText, 70);


        setTimeout(() => {


            typeWriter(text, secondText, 60);


        }, 3500);



    },2000);



});

const openLetter = document.getElementById("openLetter");

const envelope = document.getElementById("envelope");

const letter = document.getElementById("letter");

const letterText = document.getElementById("letterText");


const finalLetter = 
`Anni fa mi chiedevo cosa significasse davvero vivere la vita dei sogni e, soprattutto, come si facesse a capire quando finalmente ci sei arrivato.

Oggi posso rispondere.

Per la prima volta nella mia vita non desidero più nulla, perché sento di aver già guadagnato tutto.

L'estate, la moto... ma soprattutto tu.

Sei la cosa per cui ho lottato di più, quella per cui non ho mollato per anni.

E alla fine ce l'ho fatta.

Grazie a te sto vivendo la vita dei miei sogni, perché la verità è che eri tu il mio sogno.

Sei riuscita a rendermi felice in un modo che non avrei mai immaginato.

Ti amo ❤️`;



openLetter.addEventListener("click", () => {


    envelope.classList.add("hide-envelope");


    letter.classList.add("open");


    let i = 0;


    function writeLetter(){

        if(i < finalLetter.length){

            letterText.innerHTML += finalLetter.charAt(i);

            i++;

            setTimeout(writeLetter,40);

        }

    }


    writeLetter();


});
