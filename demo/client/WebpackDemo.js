import add from './add';
import multiply from './multiply';
import * as Math from './math';

function writeLine(text) {
  const div = document.createElement('div');
  div.innerHTML = `<h1>${text}</h1>`;
  document.getElementById('app-root').appendChild(div);
}

// ignore the eslint warnings for now.
writeLine('1 + 2 = ' + add(1, 2));
writeLine('2 * 3 = ' + multiply(2, 3));

writeLine('1 + 2 = ' + Math.add(1, 2));
writeLine('2 * 3 = ' + Math.multiply(2, 3));
