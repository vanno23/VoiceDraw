import { getCanvasId } from "./canvas.js";

// Function to handle speech recognition
export function handleSpeechRecognition(event, recognition) {
  const result = event.results[0][0].transcript.trim().toUpperCase();
  const mode = recognition.mode; // Get the selected mode (circle, triangle, square)
  if (result.length === 2 && /[A-J]\d/.test(result)) {
    const rowChar = result.charAt(0);
    const rowNum = parseInt(result.charAt(1)) - 1;
    const colNum = rowChar.charCodeAt(0) - 65;
    const canvasId = getCanvasId(rowNum, colNum);
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    switch (mode) {
      case "circle":
        drawCircle(ctx);
        break;
      case "triangle":
        drawTriangle(ctx);
        break;
      case "square":
        drawSquare(ctx);
        break;
      default:
        break;
    }
  }
}

// Function to handle speech recognition errors
export function handleSpeechRecognitionError(event) {
  console.error("Speech recognition error:", event.error);
}

// Function to draw a circle
function drawCircle(ctx) {
  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radius = 8;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
}

// Function to draw a triangle
function drawTriangle(ctx) {
  const halfWidth = ctx.canvas.width / 2;
  const halfHeight = ctx.canvas.height / 2;
  ctx.beginPath();
  ctx.moveTo(halfWidth, 0);
  ctx.lineTo(0, ctx.canvas.height);
  ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
  ctx.closePath();
  ctx.fillStyle = "blue";
  ctx.fill();
}

// Function to draw a square
function drawSquare(ctx) {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
