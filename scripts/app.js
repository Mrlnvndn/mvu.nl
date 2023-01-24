'use strict'

//
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
if (prefersDarkScheme.matches) {
    document.body.classList.add('dark-theme')
} else {
    document.body.classList.add('light-theme')
}

const switcher = document.querySelector('.modebtn')
switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme')
    document.body.classList.toggle('dark-theme')

    const className = document.body.className
    if (className == 'light-theme') {
        this.textContent = 'Dark'
    } else {
        this.textContent = 'Light'
    }
    console.log('current class name: ' + className)
})
