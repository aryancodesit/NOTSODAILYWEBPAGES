let canvas = document.getElementById("artboard");
let ctx = canvas.getContext("2d");

let isDrawing = false;
let currentColor = "#000000";  // default color is black
let currentLineWidth = 5;  // default line width is 5px

canvas.width = 600;
canvas.height = 400;

// Start drawing when mouse is pressed down
canvas.addEventListener("mousedown", startDrawing);

// Stop drawing when mouse is released
canvas.addEventListener("mouseup", stopDrawing);

// Draw as mouse moves
canvas.addEventListener("mousemove", draw);

function startDrawing(e) {
    isDrawing = true;
    draw(e);  // immediately start drawing on mouse press
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();  // reset the path when the drawing stops
}

function draw(e) {
    if (!isDrawing) return;

    ctx.lineWidth = currentLineWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Change drawing color
function changeColor(color) {
    currentColor = color;
}

// Change line width
function changeLineWidth(width) {
    currentLineWidth = width;
}

// Clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
