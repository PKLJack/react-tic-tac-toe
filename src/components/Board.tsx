interface BoardProps {
  children: React.ReactNode;
}

export default function Board({ children }: BoardProps) {
  console.log("render Board");

  return (
    <>
      <div className="board">{children}</div>
    </>
  );
}
