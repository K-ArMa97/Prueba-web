document.addEventListener("DOMContentLoaded", function () {
    //cargar todo el html antes de usar js
    const icon = document.getElementById("burger-icon");
    const menu = document.querySelector("ul.menu");

    icon.addEventListener("click", function (e) {
        e.stopPropagation();

        if (menu.classList.contains("open")) {
            menu.classList.remove("open");
            menu.classList.add("close");

            const lastItem = menu.querySelector("li:nth-child(1)");
            //dentro del if , se repite este evento cada vez que se da click
            //solo una vez
            lastItem.addEventListener(
                "animationend",
                function () {
                    if (menu.classList.contains("close")) {
                        menu.classList.remove("close");
                        icon.style.color = "white";
                    }
                },
                { once: true }
            ); //solo una vez se repite este evento, luego se elimina
        } else {
            menu.classList.add("open");
            icon.style.color = "black";
        }
    });

    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && e.target !== icon) {
            if (menu.classList.contains("open")) {
                menu.classList.remove("open");
                menu.classList.add("close");

                const lastItem = menu.querySelector("li:nth-child(1)");
                //dentro del if , se repite este evento cada vez que se da click
                //solo una vez
                lastItem.addEventListener(
                    "animationend",
                    function () {
                        if (menu.classList.contains("close")) {
                            menu.classList.remove("close");
                            icon.style.color = "white";
                        }
                    },
                    { once: true }
                ); //solo una vez se repite este evento, luego se elimina
            }
        }
    });
});
