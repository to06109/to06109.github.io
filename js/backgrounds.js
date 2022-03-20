const images = [
  '0.jpg',
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

// js에서 html요소를 만듬
const bgImage = document.createElement('img')
console.dir(bgImage)

bgImage.src = `img/${chosenImage}`
bgImage.alt = 'background images'
bgImage.classList.add('bgimg')

//html에 요소 추가
const main = document.querySelector('#main_wrap')
main.prepend(bgImage)
