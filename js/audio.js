const audio = document.querySelector("#bgm");
var $audio_button = $('#audio_control button');

audio.pause();

function pause() {
    audio.pause();
}

function play() {
    audio.play();
}
$(function(){
    $audio_button.click(function() {
        $audio_button.toggleClass('active');
    });
});