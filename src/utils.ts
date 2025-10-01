import type { CellType, GameStatusType, PlayerType, WinnerType } from "./model";

export function getWinner(arr: CellType[]): WinnerType {
  const pairs = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagnoal
    [0, 4, 8],
    [2, 4, 6],
  ] as const;
  for (const p of pairs) {
    if (
      arr[p[0]] !== "" && //
      arr[p[0]] === arr[p[1]] &&
      arr[p[1]] === arr[p[2]]
    ) {
      const val = arr[p[0]];
      if (val === "") {
        throw new Error("Logic error");
      }
      return val;
    }
  }
  return null;
}

export function getGameStatus(
  winner: PlayerType | null,
  arr: CellType[],
): GameStatusType {
  if (
    winner ||
    arr.indexOf("") === -1 // No empty cell
  ) {
    return "finished";
  } else {
    return "playing";
  }
}
