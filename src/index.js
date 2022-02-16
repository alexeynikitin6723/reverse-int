module.exports = function reverse(n) {
	if (n < 0) n = -n;
	let str = n.toString();
	str = str.split('').reverse().join('');
	return Number(str);
}
