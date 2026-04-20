import { useState, useEffect } from "react";
import "./App.css";
import MoodSelector from "./components/MoodSelector";

function App() {
  const [mood, setMood] = useState("");
  const [history, setHistory] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("moods")) || [];
    setHistory(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(history));
  }, [history]);

  const handleMood = (selectedMood) => {
    setMood(selectedMood);
    setHistory([...history, selectedMood]);
  };

  const deleteMood = (indexToDelete) => {
  const updatedHistory = history.filter((_, index) => index !== indexToDelete);
  setHistory(updatedHistory);
};

  // Mood colors
  const moodColors = {
    "Happy 😊": "#FFD700",
    "Sad 😢": "#87CEEB",
    "Angry 😡": "#FF6B6B",
    "Excited 🤩": "#7CFC00",
  };

  // Mood message
  const moodMessage = {
    "Happy 😊": "Keep smiling! 😊",
    "Sad 😢": "It's okay to feel sad 💙",
    "Angry 😡": "Take a deep breath 😌",
    "Excited 🤩": "Enjoy the moment 🎉",
  };

  return (
    <div
      className="app"
      style={{ backgroundColor: moodColors[mood] || "#acb6e5" }}
    >
      <h1>Mood Tracker 😊</h1>

      <MoodSelector onSelect={handleMood} />

      {mood && (
        <div className="result">
          <h2>You feel: {mood}</h2>
          <p>{moodMessage[mood]}</p>
        </div>
      )}

      <div className="history">
        <h3>History</h3>
        {history.map((m, index) => (
          <div key={index} className="history-item">{m}
          <button onClick={() => deleteMood(index)} className="delete-btn">❌</button>
          </div>
        ))}
      </div>

      <div className="stats">
        <h3>Stats</h3>
        <p>Total Entries: {history.length}</p>
      </div>
    </div>
  );
}

export default App;