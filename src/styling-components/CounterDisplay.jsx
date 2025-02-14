export function CounterDisplay({ count }) {
  const CounterDisplayStyle = {
    fontSize: "30px",
    color: "blue",
  };
  return (
    <div style={CounterDisplayStyle}>
      <h2>{count}</h2>
    </div>
  );
}
