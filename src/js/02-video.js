
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (seconds) {
    videoplayer - current - time;
    const currentTime = player.currentTime;
});




player.on('timeupdate', seconds);
    
const currentTime = player.currentTime;

const onPlay = function(seconds) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

// player.on('timeupdate', () => {
//   const currentTime = player.currentTime;
//   localStorage.setItem('videoplayer-current-time', currentTime);
// });