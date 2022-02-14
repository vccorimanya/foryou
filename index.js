const text = document.querySelector('#push_me')

const button = document.querySelector('.pushable')

const palabras = ['Michi', 'Gato', 'Neko']

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
  const random= getRandom(0,3)
  let news = palabras[random]
  text.innerText = news
})

/* text.innerText = `${contador}` */