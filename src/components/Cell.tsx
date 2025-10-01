import {
  useStateContext,
  useStateDispatchContext,
} from "../providers/ArrProvider";

interface CellProps {
  index: number;
}

export default function Cell({ index }: CellProps) {
  console.log("render Cell", index);

  const { arr } = useStateContext();
  const dispatch = useStateDispatchContext();

  const value = arr[index];
  const classList = [
    "cell",
    value === "" ? "cursor-pointer" : "cursor-not-allowed",
  ];

  const cellContent =
    value === "X" ? ( //
      <Cross />
    ) : value === "O" ? (
      <Circle />
    ) : null;

  function handleClick() {
    dispatch({ type: "click", index: index });
  }

  return (
    <button onClick={handleClick} className={classList.join(" ")}>
      {cellContent}
    </button>
  );
}

function Circle() {
  return (
    <svg version="1.1" viewBox="0 0 100 100">
      <circle
        cx={50}
        cy={50}
        r={38}
        stroke="black"
        strokeWidth={10}
        fill="none"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg version="1.1" viewBox="0 0 100 100">
      <path
        d="M 18,82 82,18"
        fill="none"
        stroke="black"
        strokeWidth={10}
        strokeLinecap="round"
      />
      <path
        d="M 18,18 82,82"
        fill="none"
        stroke="black"
        strokeWidth={10}
        strokeLinecap="round"
      />
    </svg>
  );
}
