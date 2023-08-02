const fs = require('node:fs')
const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile)

console.log('Leyendo el primer archivo...')

// TODO: change to promise
fs.readFilePromise('./archivo.txt', 'utf-8', (err, text) => {
  console.log(text)
})

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el primer archivo...')
fs.readFilePromise('./archivo2.txt', 'utf-8', (err, text) => {
  console.log(text)
})
