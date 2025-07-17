import React, { useEffect, useState } from "react";

// Inline styles for reusable styling
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: 340,
    margin: "40px auto",
    padding: 28,
    borderRadius: 18,
    background: "#f4f7fb",
    boxShadow: "0 10px 30px rgba(40,40,80,0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2d2d2d",
  },
  timer: {
    fontSize: 60,
    fontWeight: "600",
    margin: "30px 0 20px",
    color: "#33475b",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    gap: 16,
    margin: "14px 0",
  },
  button: {
    padding: "12px 22px",
    border: "none",
    borderRadius: 10,
    background: "#6C63FF",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    cursor: "pointer",
  },
  buttonSecondary: {
    background: "#e0e0eb",
    color: "#333",
  },
  label: {
    marginTop: 16,
    fontSize: 15,
    color: "#666",
  },
  sessionType: {
    display: "inline-block",
    background: "#ece8ff",
    padding: "6px 16px",
    borderRadius: 14,
    color: "#5548c8",
    fontSize: 14,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 6,
  },
};

// Helper for formatting time (in seconds) as mm:ss
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function PomodoroTimer() {
  // Dummy states for timer and session type
  const [isPaused,setIsPaused]=useState(true);
  const [currentSessionType,setCurrentSessionType] = useState("Pomodoro"); // or 'Short Break' / 'Long Break'
  const [timeInSeconds ,setTimeInSecond]= useState(1500); // Example: 25 minutes
  

  let formattedTime = formatTime(timeInSeconds);

  useEffect(()=>{
    if(!isPaused){
      const interval=setInterval(()=>{
        setTimeInSecond(prev=>{
          formattedTime=formatTime(prev-1)
          return prev-1
        })
        
      },1000)
      return ()=>clearInterval(interval)
    }
  },[isPaused])

  // Stub methods
  function handleStart() {
    setIsPaused(false)
    // TODO: Start timer logic
  }
  function handlePause() {
    setIsPaused(true)
    // TODO: Pause timer logic
  }
  function handleReset() {
    setTimeInSecond(()=>{
    if(currentSessionType=="Pomodoro")return 1500
    else if(currentSessionType=="Short Break")return 300
    else return 900
  })
    // TODO: Reset timer logic
  }
  function handleModeChange(mode) {
    setCurrentSessionType(mode)
    setTimeInSecond(()=>{
    if(mode=="Pomodoro")return 1500
    else if(mode=="Short Break")return 300
    else return 900
  })
    // TODO: Switch to Pomodoro / Short Break / Long Break
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Pomodoro Timer</h2>
      <div style={styles.sessionType}>{currentSessionType}</div>
      <div style={styles.timer}>{formattedTime}</div>

      <div style={styles.controls}>
        <button style={styles.button} onClick={handleStart}>
          Start
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonSecondary }}
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonSecondary }}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div style={styles.label}>Switch Mode:</div>
      <div style={styles.controls}>
        <button
          style={{ ...styles.button, ...styles.buttonSecondary }}
          onClick={() => handleModeChange("Pomodoro")}
        >
          Pomodoro
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonSecondary }}
          onClick={() => handleModeChange("Short Break")}
        >
          Short Break
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonSecondary }}
          onClick={() => handleModeChange("Long Break")}
        >
          Long Break
        </button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
