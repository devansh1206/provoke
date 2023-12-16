// Replace YOUR_API_KEY with your actual YouTube API key
const API_KEY = 'AIzaSyBoiy_w45CX-DtvDbz1tfsE4t7SiSn9nBM';

// Replace YOUR_VIDEO_ID with the unlisted YouTube video ID
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
    // You can implement additional logic based on player state changes
    // For example, pause the video when it ends
    if (event.data == YT.PlayerState.ENDED) {
        player.pauseVideo();
    }
}
