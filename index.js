const F = require('./src/fib')
const rl = require('./src/rl')
const print = require('./src/print')

const logo = 
`┏━╸╻┏━┓┏━┓┏━┓┏━┓┏━╸┏━╸╻
┣╸ ┃┣━┫┃ ┃┃ ┃┣━┫┃  ┃  ┃
╹  ╹┗━┛┗━┛╹ ╹╹ ╹┗━ ┗━ ╹`

print(logo, 'blue')
;(() => {
	let mode = 'F3'

	rl.prompt()
  
	rl.on('line', line => {
		line = line.trim().split(' ')
		let g = line.shift()
		if(g.startsWith('.')) {
			switch(g.slice(1)) {
				case 'exit':
					process.exit(0)
					break
				case 'help':
					print('Type in a whole number (n) to get the Fibonacci sequence for the nth term')
					break
				case 'mode':
					let a = line[0].toUpperCase()
					if(['F1', 'F2', 'F3'].includes(a)) {
						print(`[Fibonacci] switched mode to ${a}`, 'green')
					}
					else {
						print(`[Fibonacci] invalid mode ${a}`, 'red')
					}
					break
				default:
					print('Invalid REPL keyword')
			}
		}
		else if(g == null || !/^-?\d+$/.test(g)) {
			print(`[Fibonacci] cannot calculate sequence for ${g || 'null'}`, 'red')
		}
		else {
			try {
				print(F[mode](g), 'green')
			}
			catch(e) {
				print(`[Fibonacci] cannot calculate sequence for ${g || 'null'}`, 'red')				
			}
		}
		rl.prompt()
	})
	rl.on('close', () => {
		process.exit(0)
	})
})()