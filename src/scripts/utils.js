// create array of english alphabets
export const alphabets = Array.from(Array(26), (_, i) => String.fromCharCode(55 + i));

// check in capital and small alphabet range
export const isAlphabet = (key) => (65 <= key && key <= 90) || (key >= 97 && key <= 122);

export const isNumber = (key) => 48 <= key && key <= 57;

// fetch random value from given array
export const random = (array = []) => array[Math.floor(Math.random() * array.length)];

export const colorBox = ['#5d4821', 'crimson', 'deepPink', 'springGreen', '#67ffff', '#9a1717'];

// create an object where  each letter is the key and value are emoji list f it's word using .codePointAt()

export const emojiList = {
  A: [9992, 127822],
  B: [127820, 128214],
  C: [128004, 128008],
  D: [128021],
  E: [128024, 128065],
  F: [128031],
  G: [127815, 128105],
  H: [128014, 129304, 127968],
  I: [127848],
  J: [127994],
  K: [129373, 128273],
  L: [129409],
  M: [128018, 127769],
  N: [128067],
  O: [127818, 129417],
  P: [127824, 127903],
  Q: [128120],
  R: [128007, 127801],
  S: [127774],
  T: [128005, 128688],
  U: [9730, 9757],
  V: [128656],
  W: [8986, 128167],
  X: [127794, 128424],
  Y: [128741, 129496],
  Z: [129427],
};

export const fragment = document.createDocumentFragment();

export const createDivList = (list = []) => {
  return list.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.textContent = item;
    fragment.appendChild(div);
  });
};

export const spellingList = {
  A: 'apple',
  B: 'book',
  C: 'cat',
  D: 'dog',
  E: 'eye',
  F: 'fish',
  G: 'girl',
  H: 'home',
  I: 'ice',
  J: 'jug',
  K: 'key',
  L: 'lion',
  M: 'moon',
  N: 'nose',
  O: 'owl',
  P: 'pink',
  Q: 'queen',
  R: 'rose',
  S: 'sun',
  T: 'tap',
  U: 'up',
  V: 'van',
  W: 'water',
  X: 'xerox',
  Y: 'yoga',
  Z: 'zebra',
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};
