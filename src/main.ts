import './index.css'

const client = document.querySelector('#client')
const images = [
  { img: 'client-databiz.svg', name: 'client databiz' },
  { img: 'client-audiophile.svg', name: 'client audiophile' },
  { img: 'client-meet.svg', name: 'client meet' },
  { img: 'client-maker.svg', name: 'client maker' }
]

const openMenu = document.querySelector('#open-menu')
const closeMenu = document.querySelector('#close-menu')
const showMenu = document.querySelector('#show-menu')
const firstDropdown = document.querySelector('#first-dropdown')
const secondDropdown = document.querySelector('#second-dropdown')

document.addEventListener('DOMContentLoaded', () => {
  images.forEach(item => {
    let img = document.createElement('img')
    img.setAttribute('src', item.img)
    img.setAttribute('alt', item.name)
    img.classList.add('block', 'w-[70px]', 'md:w-[100px]')
    client?.appendChild(img)
  })

  openMenu?.addEventListener('click', () =>
    showMenu?.classList.replace('hidden', 'block')
  )

  closeMenu?.addEventListener('click', () =>
    showMenu?.classList.replace('block', 'hidden')
  )

  firstDropdown?.addEventListener('click', () => {
    firstDropdown.nextElementSibling?.classList.toggle('hidden')
    firstDropdown.querySelector('img')?.classList.toggle('rotate-180')
  })

  secondDropdown?.addEventListener('click', () => {
    secondDropdown.nextElementSibling?.classList.toggle('hidden')
    secondDropdown.querySelector('img')?.classList.toggle('rotate-180')
  })
})
