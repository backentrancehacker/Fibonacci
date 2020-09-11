const colors = {
	black:   30,
	red:     31,
	green:   32,
	yellow:  33,
	blue:    34,
	magenta: 35,
	cyan:    36,
	white:   37
}

const print = (statement, color) => {
	if(color && colors.hasOwnProperty(color)) {
		console.log(`\x1b[${colors[color]}m%s\x1b[0m`, statement)
	}
	else {
		console.log(statement)
	}
}

module.exports = print