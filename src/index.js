import style from "./style.css";
import logo from "./assets/webpack.svg";
import gemini from "./assets/saga-kanon.png";
import data from "./data.json";
import {helloWorld} from "./components/helloWorld.js";

const arr = [1,2,3],
codeESNext = () => console.log(...arr);

console.log('Hola sin configuracion webpack');

codeESNext();
//document.getElementById('app').innerHTML = `<img src = '${logo}' alt='Webpack'>`;
const d =document;
const $app = d.getElementById('app');
const $h1 = d.createElement('H1');
const $logo = d.createElement('IMG');
const $img = d.createElement('IMG');
const $nav = d.createElement('NAV');

let menu = "";
let hello = new helloWorld('Vanilla JS');

data.links.forEach(element => {
    menu += `<a href = "${element[1]}"> ${element[0]} </a>`
});

$h1.textContent = hello.saludar();
$logo.src = logo;
$logo.classList.add('icon');
$img.src = gemini;
$nav.innerHTML = menu;
$nav.classList.add('menu');

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
//$app.appendChild($img);