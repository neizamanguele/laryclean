var links = document.querySelectorAll("nav a");

for (var i = 0; i < links.length; i++) {

    links[i].addEventListener("click", function (e) {

        e.preventDefault();

        var destino = this.getAttribute("href");

        document.querySelector(destino).scrollIntoView(true);

    });

}

