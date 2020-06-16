const bodyElement = document.querySelector('body')

const main = document.createElement('main')
bodyElement.append(main)

const button = document.createElement('button')
const buttonText = document.createTextNode('BEGONE')
bodyElement.append(button)
button.append(buttonText)

button.addEventListener('click', function() {
    main.remove()
})

const imageElement = document.createElement('img')
imageElement.src = 'babyyoda.jpg'
main.append(imageElement)

const linkElement = document.createElement('a')
const linkName = document.createTextNode('Link to Baby Yoda')
linkElement.append(linkName)
linkElement.title = "Link to Baby Yoda"
linkElement.href = "https://www.firstcoastnews.com/article/entertainment/a-look-back-at-the-top-5-memes-of-2019/77-e945bfd5-5033-429e-9526-3c19a954a699"
main.append(linkElement)