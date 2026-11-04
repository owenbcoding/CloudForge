
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting to API...");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/health`)
      .then((response) => response.json())
      .then((data) => setMessage(`API Status: ${data.status}`))
      .catch(() => setMessage("Could not connect to API"));
  }, []);

  return (
    <main>
      <h1>CloudForge ☁️</h1>
      <p>A full-stack application powered by AWS.</p>
      <p>{message}</p>
    </main>
  );
}

export default App;
