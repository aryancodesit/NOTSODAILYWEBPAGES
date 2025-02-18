const inputText = document.getElementById("inputText");
const animationSelect = document.getElementById("animationSelect");
const animatedText = document.getElementById("animatedText");
const startAnimationButton = document.getElementById("startAnimation");

// Set initial animation options
const animations = ["fade-in", "slide-in", "zoom-in", "rotate-in", "bounce-in", "flip-in", "blur-in", "swing-in"];
animations.forEach(anim => {
    const option = document.createElement("option");
    option.value = anim;
    option.textContent = anim.charAt(0).toUpperCase() + anim.slice(1).replace("-", " ");
    animationSelect.appendChild(option);
});

// Event listener to update text
inputText.addEventListener("input", function () {
    animatedText.textContent = inputText.value;
});

// Function to start animation
function startAnimation() {
    const selectedAnimation = animationSelect.value;
    
    // Reset animations by removing all classes
    animatedText.classList.remove(...animations);

    // Force reflow to restart the animation
    void animatedText.offsetWidth;

    // Add new animation
    animatedText.classList.add(selectedAnimation);
}

// Event listener for button click
startAnimationButton.addEventListener("click", startAnimation);
