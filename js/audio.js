let el = document.getElementById("bgm");
var $audio_button = $('#audio_control button');
function enableMute() {
    el.muted = true;
}

function disableMute() {
    el.muted = false;
}

$(function(){
    $audio_button.click(function(){
        $audio_button.toggleClass('active');
    
        if($this.hasClass('active') ) {
            $this.css('display', 'none');
        }
    });
});