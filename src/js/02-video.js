import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player('vimeo-player');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(
    (setGetData = data => {
      localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
      localStorage.getItem(LOCALSTORAGE_KEY);
      console.log(data.seconds);
    }),
    1000
  )
);

player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .then(function (seconds) {
    seconds = localStorage.getItem(LOCALSTORAGE_KEY);
  });
  


