import { createContext, useContext, useReducer } from "react";

import type { CellType, PlayerType } from "../model";
import { getGameStatus, getWinner } from "../utils";

interface StateType {
  arr: CellType[];
  player: PlayerType;
}

const initialState: StateType = {
  arr: ["", "", "", "", "", "", "", "", ""],
  player: "X",
};

type ActionType =
  | {
      type: "click";
      index: number;
    }
  | {
      type: "reset";
    };

function stateReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "click": {
      const winner = getWinner(state.arr);
      const gameStatus = getGameStatus(winner, state.arr);

      // Ignore if game is finished
      if (gameStatus === "finished") return state;

      // Ignore already filled cell
      if (state.arr[action.index] !== "") return state;

      //
      const nextArr = [...state.arr];

      nextArr[action.index] = state.player;

      return {
        arr: nextArr,
        player: state.player === "X" ? "O" : "X",
      };
    }
    case "reset": {
      return { ...initialState };
    }
  }
}

const StateContext = createContext<StateType | null>(initialState);
const StateDispatchContext = createContext<
  React.ActionDispatch<[action: ActionType]>
>(null!);

export function useStateContext() {
  const obj = useContext(StateContext);
  if (obj == null) throw new Error("Bad useContext(StateContext)");
  return obj;
}

export function useStateDispatchContext() {
  return useContext(StateDispatchContext);
}

export default function StateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <>
      {/* f */}
      <StateContext value={state}>
        <StateDispatchContext value={dispatch}>
          {/* f */}
          {children}
        </StateDispatchContext>
      </StateContext>
    </>
  );
}
