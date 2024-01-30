'use strict'

const button = document.querySelector('button')

const convert = () => {
    const miles = document.querySelector('input').value
    const kilometers = miles * 1.609
    document.querySelector('output').innerHTML = kilometers.toFixed(2)
}

button.addEventListener('click',convert)