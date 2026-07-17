const button = document.getElementById("startButton");

const intro = document.querySelector(".intro");

const story = document.querySelector(".story");


button.addEventListener("click", () => {


    intro.classList.add("hide");


    setTimeout(() => {


        story.classList.add("show");


    },2000);



});
