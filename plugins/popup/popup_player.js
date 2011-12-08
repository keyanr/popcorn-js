function show_popup() {

    var newPage = "<html>";
    newPage += "<body>";
    newPage += '<video id="video"';
    newPage += 'autobuffer="autobuffer"';
    newPage += 'preload="auto"';
    newPage += 'controls="controls"';
    newPage += 'width = "300px"';
    newPage += 'poster="../../test/poster.png">';
    newPage += '<source id="mp4" src="../../test/trailer.mp4"';
    newPage += 'type=\'video/mp4; codecs="avc1, mp4a"\' />';
    newPage += '<source id="ogv"';
    newPage += 'src="../../test/trailer.ogv"';
    newPage += 'type=\'video/ogg; codecs="theora, vorbis"\' />';
    newPage += '</video></br>'
    newPage += "<button onclick='window.close()'>close popup</button></body></html>";
    j = window.open('', 'popup', 'height=390,width=350,left=500,top=10,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes')
    j.document.write(newPage);
    j.focus();
    document.getElementById("video").style.display = 'none';
    j.document.close();
    Popcorn.instances.forEach(function (video) {
        if (video.options.pauseOnLinkClicked) {
            video.pause();
        }
    });
}
function closedWindow() {
    document.getElementById("video").style.display = 'block';
}

function checkWin() {

    if (!j) {
        document.getElementById("msg").innerHTML = "Popup window has never been opened!";
    }
    else {
        if (j.closed) {
            document.getElementById("video").style.display = 'block';

        }
        else {
            document.getElementById("msg").innerHTML = "Pop-up window has not been closed!";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var p = Popcorn("#video", {
        pauseOnLinkClicked: true
    })
      .play();
}, false);

