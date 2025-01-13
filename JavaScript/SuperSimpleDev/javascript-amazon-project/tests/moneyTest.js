import { formatCurrency } from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95') {
	console.log('test passed');
} else {
	console.log('test failed');
}

console.log('works with cero');

if (formatCurrency(0) === '0.00') {
	console.log('test passed');
} else {
	console.log('test failed');
}

console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01') {
	console.log('test passed');
} else {
	console.log('test failed');
}

if (formatCurrency(2000.4) === '20.00') {
	console.log('test passed');
} else {
	console.log('test failed');
}
