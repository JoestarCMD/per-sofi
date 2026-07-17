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
