import style from "./style.css";
import logo from "./assets/webpack.svg";
import data from "./data.json";
import {helloWorld} from "./components/helloWorld.ts";

//document.getElementById('app').innerHTML = `<img src = '${logo}' alt='Webpack'>`;
const d =document;
const $app = d.getElementById('app');
const $h1 = d.createElement('H1');
const $logo = d.createElement('IMG');
const $img = d.createElement('IMG');
const $nav = d.createElement('NAV');

let menu = "";
let hello = new helloWorld("Typescript");

data.links.forEach(element => {
    menu += `<a href = "${element[1]}"> ${element[0]} </a>`
});

$h1.textContent = hello.saludar();
$logo.src = logo;
$logo.classList.add('icon');
$nav.innerHTML = menu;
$nav.classList.add('menu');

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
