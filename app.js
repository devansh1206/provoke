const API_KEY = 'AIzaSyBoiy_w45CX-DtvDbz1tfsE4t7SiSn9nBM';
const VIDEO_ID = 'YcCtOaMf8wo';

let player;
// var vid = getElementByName("videoID")
function onYouTubeIframeAPIReady() {
    const vid = document.getElementById("videoID").value;
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: vid,
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
