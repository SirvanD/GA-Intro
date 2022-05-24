var images = document.querySelectorAll("img");
var jobRefInput = document.querySelector('[name="jobref"]');
var counterInput = document.querySelector('[name="valuee"]');
let countFilledCircles = 0;

for (let i = 0; i < images.length; i++) {
  if (images[i].getAttribute("src") === "filledO.gif") {
    countFilledCircles++;
  }
}

counterInput.value = countFilledCircles;
jobRefInput.value = "PO190";

document.forms[0].submit();
