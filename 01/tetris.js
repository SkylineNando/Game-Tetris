const boardWidth = 10;
const boardHeight = 20;
const board = Array.from({ length: boardHeight }, () => Array(boardWidth).fill(0));
let currentPiece = getRandomPiece();
let currentPiecePosition = { x: 0, y: 0 };
let gameInterval;

function drawBoard() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = '';
  board.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    row.forEach(cell => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      if (cell === 1) {
        cellDiv.classList.add('block');
      }
      rowDiv.appendChild(cellDiv);
    });
    gameBoard.appendChild(rowDiv);
  });
}

function getRandomPiece() {
  // Lógica para gerar uma nova peça aleatória
}

function updateGame() {
  if (canMoveDown()) {
    currentPiecePosition.y++;
  } else {
    mergePiece();
    currentPiece = getRandomPiece();
    currentPiecePosition = { x: 0, y: 0 };
  }
  drawBoard();
}

function canMoveDown() {
  // Lógica para verificar se a peça pode mover para baixo
}

function mergePiece() {
  // Lógica para mesclar a peça atual no tabuleiro
}

function handleKeyPress(event) {
  switch (event.key) {
    case 'ArrowLeft':
      if (canMoveLeft()) {
        currentPiecePosition.x--;
        drawBoard();
      }
      break;
    case 'ArrowRight':
      if (canMoveRight()) {
        currentPiecePosition.x++;
        drawBoard();
      }
      break;
    case 'ArrowDown':
      if (canMoveDown()) {
        currentPiecePosition.y++;
        drawBoard();
      }
      break;
    default:
      break;
  }
}

function canMoveLeft() {
  // Lógica para verificar se a peça pode mover para a esquerda
}

function canMoveRight() {
  // Lógica para verificar se a peça pode mover para a direita
}

document.addEventListener('DOMContentLoaded', () => {
  drawBoard();
  gameInterval = setInterval(updateGame, 500);
});

document.addEventListener('keydown', handleKeyPress);
