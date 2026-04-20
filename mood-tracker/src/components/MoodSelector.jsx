const moods = [
  { name: "Happy 😊", color: "#FFD700" },
  { name: "Sad 😢", color: "#87CEEB" },
  { name: "Angry 😡", color: "#FF6B6B" },
  { name: "Excited 🤩", color: "#7CFC00" },
];

function MoodSelector({ onSelect }) {
  return (
    <div className="mood-container">
      {moods.map((mood, index) => (
        <button
          key={index}
          style={{ backgroundColor: mood.color }}
          onClick={() => onSelect(mood.name)}
        >
          {mood.name}
        </button>
      ))}
    </div>
  );
}

export default MoodSelector;