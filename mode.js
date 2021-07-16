const nightDayButton = document.querySelector(".night_day__btn");
const nightDayText = document.querySelector(".night_day__btn span");

const body = document.querySelector("body");
const header = document.querySelector("header");
const logo = document.querySelector("header h1");
const menuBar = document.querySelector(".menu-bar__column");
const menuText = document.querySelectorAll(".menu-bar__menu")
const footer = document.querySelector('#footer');


const LIGHTMODE = "Light Mode";
const DARKMODE = "Dark Mode";

console.log(menuText);

function changeMode() {
    if (nightDayText.innerText === LIGHTMODE) {
        body.style.backgroundColor = "aliceblue";        // Full background
        header.style.backgroundColor = "aliceblue";      // header background
        logo.style.color = "#292a2d";
        nightDayButton.style.backgroundColor = "aliceblue";
        nightDayText.style.color = "black";
        menuBar.style.backgroundColor = "aliceblue";
        menuText[0].style.color  = "black";
        menuText[1].style.color  = "black";
        menuText[2].style.color  = "black";
        menuText[3].style.color  = "black";

        footer.style.color = "black";

        nightDayText.innerText = "Dark Mode"
    }

    else {
        body.style.backgroundColor = "#1e1f21";
        header.style.backgroundColor = "#292a2d";
        logo.style.color = "aliceblue";
        nightDayButton.style.backgroundColor = "#333638";
        nightDayText.style.color = "aliceblue";
        menuBar.style.backgroundColor = "#292a2d";
        menuText[0].style.color  = "aliceblue";
        menuText[1].style.color  = "aliceblue";
        menuText[2].style.color  = "aliceblue";
        menuText[3].style.color  = "aliceblue";

        footer.style.color = "whitesmoke";

        nightDayText.innerText = "Light Mode"
    }
}

nightDayButton.addEventListener("click", changeMode);
        