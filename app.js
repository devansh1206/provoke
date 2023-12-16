const API_KEY = 'AIzaSyBoiy_w45CX-DtvDbz1tfsE4t7SiSn9nBM';
const VIDEO_ID = 'YcCtOaMf8wo';

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        playerVars: {
            'playsinline': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        player.pauseVideo();
    }
}
