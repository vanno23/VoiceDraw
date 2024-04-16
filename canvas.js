// Function to get the canvas ID based on row and column indices
export function getCanvasId(row, column) {
  const rowChar = String.fromCharCode(65 + column);
  const colNum = row + 1;
  return "canvas" + rowChar + colNum;
}

// Function to handle canvas click events
export function handleCanvasClick(cell, event) {
  const ctx = cell.getContext("2d");
  const rect = cell.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  ctx.fillStyle = "black";
  ctx.fillRect(x, y, 5, 5);
}
