"use strict";

// Install keyboard event handler
document.addEventListener('keydown', (event) => {
    console.log("Key event", event.key);
    switch (event.key) {

        case "M":
            console.log("Navigating to main page")
            window.location.href = "/index.vhtml";
            break;

        case "n":
            const newButton = document.getElementById("learn_new");
            if (!newButton.classList.contains("inactive_button")) {
                console.log("Clicking New button", newButton);
                newButton.click();
            } else {
                console.log("New button is inactive", newButton);
            }
            break;

        case "r":
            const reviewButton = document.getElementById("remember");
            if (!reviewButton.classList.contains("inactive_button")) {
                console.log("Clicking Review button", reviewButton);
                reviewButton.click();
            } else {
                console.log("Review button is inactive", reviewButton);
            }
            break;

        case "l":
            // TODO: seek page to lessons div
            break;

        case "a":
        case "s":
        case "f":
            const advancedSearchLink = document.getElementById("lesson_tree").lastElementChild;
            console.log("Clicking Advanced Search link", advancedSearchLink);
            advancedSearchLink.click();
            break;
    }
});

console.log("IGSControl main.js running");

