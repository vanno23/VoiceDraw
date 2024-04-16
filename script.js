import { getCanvasId, handleCanvasClick } from "./canvas.js";
import {
  handleSpeechRecognition,
  handleSpeechRecognitionError,
} from "./speech.js";

const container = document.querySelector(".container");
const table = document.getElementById("grid-table");

for (let i = 0; i < 10; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("td");
    const canvas = document.createElement("canvas");
    canvas.width = 20;
    canvas.height = 20;
    canvas.id = getCanvasId(i, j);
    cell.appendChild(canvas);
    row.appendChild(cell);
  }
  table.appendChild(row);
}

for (let i = 0; i < 10; i++) {
  const rowLabel = document.createElement("div");
  rowLabel.className = "coordinate-label label-top";
  rowLabel.textContent = String.fromCharCode(65 + i);
  rowLabel.style.left = i * 20 + 0 + "px";
  container.appendChild(rowLabel);
}

for (let i = 0; i < 10; i++) {
  const colLabel = document.createElement("div");
  colLabel.className = "coordinate-label label-left";
  colLabel.textContent = i + 1;
  colLabel.style.top = i * 20 + 0 + "px";
  container.appendChild(colLabel);
}

const cells = document.querySelectorAll("canvas");
cells.forEach((cell) => {
  cell.addEventListener("click", (event) => handleCanvasClick(cell, event));
});

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();
recognition.lang = "en-US";

document.getElementById("circleBtn").addEventListener("click", () => {
  recognition.mode = "circle";
});

document.getElementById("triangleBtn").addEventListener("click", () => {
  recognition.mode = "triangle";
});

document.getElementById("squareBtn").addEventListener("click", () => {
  recognition.mode = "square";
});

recognition.onresult = (event) => handleSpeechRecognition(event, recognition); // Pass recognition object
recognition.onerror = handleSpeechRecognitionError;

document.addEventListener("click", () => {
  recognition.start();
});
