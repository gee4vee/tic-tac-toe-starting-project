const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export default function GameBoard({ onSelectSquare, turns }) {
  // const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((previousGameBoard) => {
  //     const updatedGameBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   })
  //   onSelectSquare();
  // }

  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}