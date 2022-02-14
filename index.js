const text = document.querySelector('#push_me')
const button = document.querySelector('.pushable')
const img = document.querySelector('#img')

const palabras = ['Michi', 'Gato', 'Neko', 'Michi', 'Gato', 'Neko']
const rutas = [
  './feliz.png',
  './cara-de-gato.png',
  './gato-burmilla.png',
  './gato-con-raquetas-de-nieve.png',
  './gato-negro.png',
  './gato.png',
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

button.addEventListener('click', ()=> {
  const random= getRandom(0,6)
  let news = palabras[random]
  let ruta = rutas[random]
  text.innerText = news
  img.src = ruta
})

/* text.innerText = `${contador}` */