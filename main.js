const para = document.querySelector('p')

para.style.color = 'lightBlue'
para.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.'

const header = document.querySelector('h1')

header.style.fontSize = '5em'

const item13 = document.querySelector('#item-13')

item13.style.opacity = "0.5";

const item3 = document.querySelector('#item-3').innerText = 'I say, "Hi!"'
const trex = document.querySelector('img')

trex.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg'
trex.height = '300'
const firstDiv = document.querySelector('div')

const myimage = firstDiv.appendChild(document.createElement('img'))
myimage.src = 'https://www.shitpostbot.com/img/templates/rich-and-mortie-590195f620e29-design.jpg'
myimage.height = '300'

const list = document.querySelector('ul')

// const newLi = list.appendChild(document.createElement('li')).setAttribute('id','item-16')
 

const newLi = list.appendChild(document.createElement('li'))
newLi.innerText = `Won't get fooled again.`
newLi.setAttribute('id','item-16')
newLi.setAttribute('class','item' )

// newLi.innerText = `Won't get fooled again.`

// const myimage2 = document.createElement('img')
// firstDiv.appendChild(myimage2)
// myimage2.src = 'https://www.shitpostbot.com/img/templates/rich-and-mortie-590195f620e29-design.jpg'




// const newLI = list.appendChild(document.createElement('li').setAttribute('id','item-16'))