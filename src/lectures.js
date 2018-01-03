"use strict";

// Install keyboard event handler
document.addEventListener('keydown', (event) => {
    console.log("Key event", event.key);
    switch (event.key) {

        case "M":
            console.log("Navigating to main page")
            window.location.href = "/index.vhtml";
            break;

        case "b":
        case "ArrowLeft":
            const rewindKey = document.querySelector('[title="ten seconds rewind"]');
            if (rewindKey) {
                console.log("Clicking Rewind key", rewindKey);
                rewindKey.click();
            } else {
                console.warn("FIXME: Could not find Rewind key in lectures page");
            }
            break;

/*      
 *      Unfortunately we can't run code inside the document context directly, so the following
 *      code won't work unless it or a "skipForward" proxy is injected into the document context.
        case "ArrowRight":
            var position = $.data($('#audio-player')[0], "jPlayer").status.currentTime;
            position = Math.min(100000, position + 10);  // FIXME: use actual content length
            if (playing) {
                $('#audio-player').jPlayer('play', position);
            } else {
                $('#audio-player').jPlayer('pause', position);
            }
            break;
*/

        case "1":
            const normalKey = document.querySelector('[title="normal speed"]');
            if (normalKey) {
                console.log("Clicking Normal Speed key", normalKey);
                normalKey.click();
            } else {
                console.warn("FIXME: Could not find Normal Speed key in lectures page");
            }
            break;

        case "2":
            const fasterKey = document.querySelector('[title="faster speed"]');
            if (fasterKey) {
                console.log("Clicking Faster Speed key", fasterKey);
                fasterKey.click();
            } else {
                console.warn("FIXME: Could not find Faster Speed key in lectures page");
            }
            break;

        case "3":
            const scanKey = document.querySelector('[title="scan forward"]');
            if (scanKey) {
                console.log("Clicking Scan Forward key", scanKey);
                scanKey.click();
            } else {
                console.warn("FIXME: Could not find Scan Forward key in lectures page");
            }
            break;

    }
});

console.log("IGSControl lectures.js running");

