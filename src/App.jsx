import { useState } from "react";
import { pages } from "./data/pages";
import AdventurePage from "./components/AdventurePage";
import "./App.css";

export default function App() {
  const [currentPageId, setCurrentPageId] = useState("start");
  const [history, setHistory] = useState([]);

  const currentPage = pages[currentPageId];

  function navigate(targetId) {
    setHistory((prev) => [...prev, currentPageId]);
    setCurrentPageId(targetId);
  }

  function goBack() {
    if (history.length === 0) return;
    const prev = [...history];
    const last = prev.pop();
    setHistory(prev);
    setCurrentPageId(last);
  }

  function restart() {
    setHistory([]);
    setCurrentPageId("start");
  }

  if (!currentPage) {
    return (
      <div className="error-screen">
        <p>Page "{currentPageId}" not found. Check your pages.js file.</p>
        <button onClick={restart}>Return to Start</button>
      </div>
    );
  }

  const PageComponent = currentPage.component;

  return (
    <AdventurePage
      title={currentPage.title}
      choices={currentPage.choices}
      onNavigate={navigate}
      onBack={history.length > 0 ? goBack : null}
      onRestart={restart}
      isEnding={currentPage.isEnding}
    >
      <PageComponent />
    </AdventurePage>
  );
}
