export function Arrow({
  direction,
  handleClick,
}: {
  direction: string;
  handleClick: () => void;
}) {
  if (direction === "left") return <button onClick={handleClick}>&lt;</button>;
  if (direction === "right") return <button onClick={handleClick}>&gt;</button>;
}
