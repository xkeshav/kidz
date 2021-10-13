import { emojiList, isAlphabet, isNumber, random } from './utils.js';

const mainBlock = document.querySelector('main');
const muteButton = document.querySelector('#mute');
const audioPlayer = document.querySelector('#audioPlayer');

let isMuted = false;

//const folderLocation = './media/';

muteButton.addEventListener('click', (e) => {
  isMuted = !isMuted;
  audioPlayer.muted = isMuted;
  e.target.classList.toggle('mute');
});

const getEmoji = (letter) => {
  console.log({ letter });
  const { [letter.toUpperCase()]: list = [] } = emojiList;
  console.log({ list });
  if (list.length) {
    const codePoint = random(list);
    return String.fromCodePoint(codePoint);
  }
};

const attachAudio = (key, isNumber = false) => {
  let keyName;
  let location = './media/';
  if (isNumber) {
    keyName = key.replace('Digit', '');
    location += 'numbers';
  } else {
    keyName = key.replace('Key', '').toLowerCase();
    location += 'alphabets';
  }
  const source = `${location}/${keyName}.ogg`;
  audioPlayer.src = source;
  audioPlayer.load();
  // alternative approach which seems better without adding anything to HTML
  // const audio = new Audio();
  // audio.src = source;
  // audio.play();
  // when the sound has been loaded, execute your code
  audioPlayer.oncanplaythrough = async () => {
    try {
      const playedPromise = await audioPlayer.play();
      console.log({ playedPromise });
    } catch (e) {
      console.dir({ e });
      if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
        console.error(e.name);
      }
    }
  };
};

const isNonPrintingKey = (e) => {
  const { altKey, ctrlKey, metaKey, shiftKey } = e;
  console.log({ altKey, ctrlKey, metaKey, shiftKey });
  return metaKey || ctrlKey || shiftKey || altKey;
};

document.addEventListener(
  'keydown',
  (e) => {
    const { key, keyCode, which, code } = e;
    console.log({ e });
    if (!isNonPrintingKey(e)) {
      if (isAlphabet(which)) {
        const emoji = getEmoji(key);
        mainBlock.innerHTML = key + emoji;
        console.log({ emoji });
        attachAudio(code);
      } else if (isNumber(keyCode)) {
        mainBlock.innerHTML = key;
        attachAudio(code, true);
      } else {
        const x = String.fromCodePoint(112080);
        mainBlock.innerHTML = x;
      }
    } else {
      console.log('Printing Key');
    }
  },
  false
);
