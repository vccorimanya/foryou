const text = document.querySelector('#push_me')
const button = document.querySelector('.pushable')
const img = document.querySelector('#img')

const svg = document.querySelector('.svg');

const palabras = ['Michi', 'Gato', 'Neko', 'Michi', 'Gato', 'Neko']
const rutas = [
  './feliz.png',
  './cara-de-gato.png',
  './gato-burmilla.png',
  './gato-con-raquetas-de-nieve.png',
  './gato-negro.png',
  './gato.png',
]

const colors = [
  'hsl(340deg 1% 34%)',
  'hsl(340deg 8% 47%)',
  'hsl(340deg 19% 52%)',
  'hsl(340deg 25% 40%)',
  'hsl(340deg 33% 37%)',
  'hsl(340deg 44% 38%)',
  'hsl(340deg 55% 35%)',
  'hsl(340deg 68% 32%)',
  'hsl(340deg 83% 30%)',
  'hsl(340deg 100% 29%)'
]
/* fetch('https://api.paperquotes.com/apiv1/quotes/?lang=es')
.then(response => response.json())
.then(data => {
  console.log(data)
})
 */
function getRandom(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

let contador = 0

button.addEventListener('click', ()=> {
  const random= getRandom(0,6)
  let news = palabras[random]
  let ruta = rutas[random]
  let newcolor= colors[random]
  text.innerText = news
  img.src = ruta
  svg.style.backgroundColor = newcolor

})

/* setInterval(()=> {
  contador++
  if (contador <11) {
    let newcolor = colors[contador]
    svg.style.backgroundColor = newcolor
  }else{
    contador = 0
  }
},100) */

/* text.innerText = `${contador}` */