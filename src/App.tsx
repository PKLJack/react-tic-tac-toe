import {
  useStateContext,
  useStateDispatchContext,
} from "./providers/ArrProvider";
import Board from "./components/Board";
import Cell from "./components/Cell";
import { getGameStatus, getWinner } from "./utils";

// function dummy() { console.log("dummy"); }

function App() {
  console.log("Render App()");

  const { arr, player } = useStateContext();
  const dispatch = useStateDispatchContext();

  const winner = getWinner(arr);
  const gameStatus = getGameStatus(winner, arr);
  const isDraw = gameStatus === "finished" && winner == null;

  const boardContent = [0, 1, 2].map((_v1, i1) => {
    return (
      <div key={i1} className="row">
        {[0, 1, 2].map((_v2, i2) => {
          const k = i1 * 3 + i2;
          return <Cell key={k} index={k} />;
        })}
      </div>
    );
  });

  return (
    <>
      <header>
        <h1 className="app-name">Tic tac toe</h1>
      </header>
      <Board>{boardContent}</Board>
      <div className="game-status">
        {gameStatus === "playing" && <div>'{player}' goes next.</div>}
        {isDraw && <div>DRAW</div>}
        {winner && <div>Winner is {winner}</div>}
      </div>
      <button onClick={() => dispatch({ type: "reset" })} className="reset-btn">
        Reset
      </button>
      <footer>
        <div>yoyoyo</div>
      </footer>
    </>
  );
}

export default App;
