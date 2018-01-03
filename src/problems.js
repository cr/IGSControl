"use strict";

// Install keyboard event handler
document.addEventListener('keydown', (event) => {
    switch (event.key) {

        case "M":
            console.log("Navigating to main page")
            window.location.href = "/index.vhtml";
            break;

        case "r":
        case "ArrowUp":
            const restartButton = document.getElementById("restart");
            if (!restartButton.disabled) {
                console.log("Clicking Restart button", restartButton);
                restartButton.click();
            } else {
                console.log("Restart button is inactive", restartButton);
            }
            break;

        case "b":
        case "ArrowLeft":
            const backButton = document.getElementById("back");
            if (!backButton.disabled) {
                console.log("Clicking Back button", backButton);
                backButton.click();
            } else {
                console.log("Back button is inactive", backButton);
            }
            break;

        case "s":
        case "ArrowRight":
            const solutionInput = document.getElementById("solution");
            console.log("Clicking Solution checkbox", solutionInput);
            solutionInput.click();
            break;

        case "n":
            const notYetButton = document.getElementById("not_yet");
            if (notYetButton) {
                console.log("Clicking Not Yet button", notYetButton);
                notYetButton.click();
            } else {
                console.log("No Not Yet button in review mode");
            }
            break;

        case "e":
            const easyButton = document.getElementById("easy");
            if (easyButton) {
                console.log("Clicking Easy button", easyButton);
                easyButton.click();
            } else {
                console.log("No Easy button in learning mode");
            }
            break;

        case "g":
            const goodButton = document.getElementById("good");
            if (goodButton) {
                console.log("Clicking Good button", goodButton);
                goodButton.click();
            } else {
                const gotItButton = document.getElementById("got_it");
                if (gotItButton) {
                    console.log("Clicking Got It button", gotItButton);
                    gotItButton.click();
                } else {
                    console.warn("FIXME: No Good and no Got It button, but one should be there.");
                }
            }
            break;

        case "h":
            const hardButton = document.getElementById("hard");
            if (hardButton) {
                console.log("Clicking Hard button", hardButton);
                hardButton.click();
            } else {
                console.log("No Hard button in learning mode");
            }
            break;

        case "f":
            const forgottenButton = document.getElementById("forgotten");
            if (forgottenButton) {
                console.log("Clicking Forgotten button", forgottenButton);
                forgottenButton.click();
            } else {
                console.log("No Forgotten button in learning mode");
            }
            break;

    }
});

console.log("IGSControl problems.js running");

