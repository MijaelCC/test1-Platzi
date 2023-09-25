const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});


h1.innerHTML = 'Mijael <br >Carbajal';
h1.innerText = 'Mijael <br >Carbajal';
// console.log(h1.getAttribute());

const img = document.createElement('img');
img.setAttribute('src', 'https://w7.pngwing.com/pngs/949/852/png-transparent-chick-beautiful-lovely-animal.png');
console.log(img);
pid.append(img);