import React from "react";
import "./styles/game.css";
import { useState } from "react";

function Square(props) {
  const color = props.val === "X" ? "blue" : "red";
  return (
    <button
      style={{ color: color }}
      className="square"
      onClick={props.handleClick}
    >
      {props.val}
    </button>
  );
}

function Board() {
  const [state, setstate] = useState([Array(9).fill(null)]);
  const [xIsNext, setxIsNext] = useState(true);
  const [step, setStep] = useState(state.length - 1);

  const handleReset = () => {
    setstate([Array(9).fill(null)]);
    setStep(0);
    setxIsNext(true);
  };
  function calWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const squares = state[state.length - 1];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  }
  const handleClick = (i) => {
    const usablestate = state.slice(0, step + 1);
    const prevSquares = usablestate[step].slice();
    // const prevSquares = history.slice();
    if (calWinner() || prevSquares[i])    //if already won or box is already filled => return
    return;
    prevSquares[i] = xIsNext ? "X" : "O"; //change the box content depending upon the turn of player

    const updatedState = usablestate.slice(0);
    updatedState.push(prevSquares);
    setstate(updatedState);
    setStep(updatedState.length - 1);
    setxIsNext(!xIsNext);
  };
  function jumpTo(i) {
    setStep(i);
    setxIsNext(!(i % 2));
  }

  const restartBtn = (
    <button
      className="restart-btn"
      title="Click to restart the game"
      onClick={handleReset}
    >
      Restart
    </button>
  );
  const winner = calWinner();
  const moves = state.map((step, move) => {
    const stepBtn = (
      <button className="move-btn" onClick={() => jumpTo(move)}>Step {move}</button>
    );
    const desc = move ? stepBtn : restartBtn;
    return <li key={move}>{desc}</li>;
  });

  const squares = state[step];
  let status;
  if (winner) {
    status = <span style={{ color: "green" }}>{winner} won the game!</span>;
  } else {
    let isFull = true;
    squares.forEach((val) => {
      if (val === null) isFull = false;
    });
    if (isFull)
      status = (
        <span style={{ color: "red" }}>Game Draw, Please restart the game</span>
      );
    else status = "Next turn : " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <p className="status">{status}</p>
      <div className="game">
        <div className="board">
          <div className="board-row">
            <Square
              key="0"
              val={squares[0]}
              handleClick={() => handleClick(0)}
            />
            <Square
              key="1"
              val={squares[1]}
              handleClick={() => handleClick(1)}
            />
            <Square
              key="2"
              val={squares[2]}
              handleClick={() => handleClick(2)}
            />
          </div>
          <div className="board-row">
            <Square
              key="3"
              val={squares[3]}
              handleClick={() => handleClick(3)}
            />
            <Square
              key="4"
              val={squares[4]}
              handleClick={() => handleClick(4)}
            />
            <Square
              key="5"
              val={squares[5]}
              handleClick={() => handleClick(5)}
            />
          </div>
          <div className="board-row">
            <Square
              key="6"
              val={squares[6]}
              handleClick={() => handleClick(6)}
            />
            <Square
              key="7"
              val={squares[7]}
              handleClick={() => handleClick(7)}
            />
            <Square
              key="8"
              val={squares[8]}
              handleClick={() => handleClick(8)}
            />
          </div>
        </div>
        <ul className="moves">{moves}</ul>
      </div>
      <br />
    </>
  );
}

export default Board;
