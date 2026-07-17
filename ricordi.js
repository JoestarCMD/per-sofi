const memories = document.querySelectorAll(".memory");


const observer = new IntersectionObserver((entries) => {


    entries.forEach(entry => {


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


}, {

    threshold:0.2

});



memories.forEach(memory => {

    observer.observe(memory);

});
