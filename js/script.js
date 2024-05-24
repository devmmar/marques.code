document.addEventListener("DOMContentLoaded", function(){

    // EFEITO 3D
    VanillaTilt.init(document.querySelectorAll(".skills-box"), {
        max: 30,
        speed: 500,
        glare: false,
    });

    // MODO NOTURNO
    document.querySelector(".tema").addEventListener("click", function() {
        var fundo = document.body.style.backgroundColor;
        var img = document.querySelector(".my_logo");
        var icon = document.querySelector(".bi");
        const textElement = document.querySelectorAll(".text_skills");

        if(fundo === "rgb(28, 28, 28)" || fundo === "#1C1C1C"){
            document.body.style.backgroundColor = "#FFFFFF";
            document.querySelector("header").style.backgroundColor = "#FFFFFF";
            document.querySelector(".text_apre").style.color = "#1C1C1C";
            
            textElement.forEach(element => {
                element.style.color = "#1C1C1C";
            })

            icon.classList.remove ("bi-moon-fill");
            icon.classList.add ("bi-sun-fill");
            img.src = "images/logo_clara.png";
        }else{
            document.body.style.backgroundColor = "#1C1C1C";
            document.querySelector("header").style.backgroundColor = "#1C1C1C";
            document.querySelector(".text_apre").style.color = "#FFFFFF";

            textElement.forEach(element => {
                element.style.color = "#FFFFFF";
            })

            icon.classList.add ("bi-moon-fill");
            icon.classList.remove ("bi-sun-fill");
            img.src = "images/logo.png";
        }
    });

});