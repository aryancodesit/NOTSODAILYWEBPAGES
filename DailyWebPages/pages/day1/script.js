const colorInput = document.getElementById("colorInput");
const colorDisplay = document.getElementById("colorDisplay");
const colorCode = document.getElementById("colorCode");

// Set initial color display
colorDisplay.style.backgroundColor = colorInput.value;
colorCode.textContent = colorInput.value;

// Update color display when the color input changes
colorInput.addEventListener("input", function() {
    const selectedColor = colorInput.value;
    colorDisplay.style.backgroundColor = selectedColor;
    colorCode.textContent = selectedColor;
});
