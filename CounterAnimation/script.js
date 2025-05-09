let valueDisplay = document.querySelectorAll('.number');
let interval = 2000;

valueDisplay.forEach((valueDisplayed) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplayed.getAttribute("data-value"));

    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function() {
        startValue += 1;
        valueDisplayed.textContent = startValue;

        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});