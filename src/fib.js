const { round, pow, sqrt } = Math

const root = sqrt(5)
const phi = (1 + root) / 2

// Approximation
const F1 = n => {
  return round(pow(phi, n) / root)
}

// Revised formula, still lacks precision
const F2 = n => {
	let f = pow((1 + root) / 2, n)
	let s = pow((1 - root) / 2, n)
	let t = 1 / root
	return round(t * (f - s))
}

// Retrieve next term based on term before
const R = n => {
	return round(n * phi)
}

// Based on string mult
const F3 = _n => {
	let n = parseInt(_n)
	if(n > 1) {
		let define = 'let a = 1, b = 0, temp;'
		let add = 'temp = b; b += a; a = temp;'.repeat(n)
		add += 'return b'
		return new Function(`${define}${add}`)()
	}
	return n <= 0 ? 0 : n
}



module.exports = {
	F1,
	F2, 
	F3,
	R
}