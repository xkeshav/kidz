import { alphabets, createDivList, isAlphabet } from './utils.js';

const mainBlock = document.querySelector('main');
const nodeList = document.querySelectorAll('.item');

const fragment = document.createDocumentFragment();

createDivList(alphabets);

mainBlock.appendChild(fragment);

document.addEventListener('keydown', (e) => {
  const { key, keyCode } = e;
  if (isAlphabet(keyCode)) {
    highlightNode(key);
  } else {
    console.log('not an alphabet');
  }
});

const highlightNode = (key) => {
  console.log({ key });
  for (const node of nodeList) {
    if (node.textContent === key.toUpperCase()) {
      node.classList.add('highlight');
    } else {
      node.classList.remove('highlight');
    }
  }
};
