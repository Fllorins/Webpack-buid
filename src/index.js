import './index.html';
import logo from './img/logo.svg';
import { mult, sum } from './modules/calc';
import './index.scss';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = logo;
img.width = 100;
imgWrap.append(img);

console.log(mult(2, 4));
console.log(sum(3, 4));
