import add from './add';
import multiply from './multiply';
import * as Math from './math';

// ignore the eslint warnings for now.
console.log('1 + 2 = ' + add(1, 2));
console.log('2 * 3 = ' + multiply(2, 3));

console.log('1 + 2 = ' + Math.add(1, 2));
console.log('2 * 3 = ' + Math.multiply(2, 3));
