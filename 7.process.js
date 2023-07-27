// argumentos de entrada
console.log(process.argv)

// controlar el proceso y su salida
//process.exit(1)

// podemos controlar eventos del proceso
process.on('beforeExit', () => {
})

process.on('exit', () => {
})

// current working directory
process.cwd()

// cambiar de directorio
process.chdir()

// proceso actual
process.pid

// version de node  
process.version

const nombre = process.argv[2]