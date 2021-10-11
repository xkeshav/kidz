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
  const { [letter]: list = [] } = emojiList;
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
    keyName = key.replace('Key', '').toLowercase();
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
  return metaKey || ctrlKey || shiftKey || altKey;
};

document.addEventListener(
  'keydown',
  (e) => {
    const { key, keyCode, which, code, altKey, ctrlKey, metaKey, shiftKey } = e;
    console.log({ e });
    if (!isNonPrintingKey) {
      if (isAlphabet(which)) {
        const emoji = drawEmoji(key);
        mainBlock.innerHTML = key + emoji;
        attachAudio(code);
      } else if (isNumber(keyCode)) {
        mainBlock.innerHTML = key;
        attachAudio(code, true);
      } else {
        const x = String.fromCodePoint(112080);
        mainBlock.innerHTML = x;
      }
    }
  },
  false
);
