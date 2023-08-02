const path = require('node:path')

console.log('Barra separadora de carpetas segun SO: ', path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log('Ruta unida: ', filePath)

// obtener el nombre de archivo
const base = path.basename(filePath)
console.log('Nombre del archivo', base)

// obtener el nombre del fichero sin la extension
const fileName = path.basename(filePath, '.txt')
console.log('Nombre del fichero', fileName)

// obtener la extension del fichero
const ext = path.extname(filePath)
console.log('Extension del fichero', ext)

