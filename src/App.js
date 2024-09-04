// import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LogoPage from "./components/logo.page";
import PlayerDetails from "./components/playersDetail";
import OpenPage from "./components/openpage";
import GameStart from "./components/gamestart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpenPage />} />
        <Route path="/logo" element={<LogoPage />} />
        <Route path="/playerdetails" element={<PlayerDetails />} />
        <Route path="/trump_game_by_hd" element={<GameStart />} />
      </Routes>
    </Router>
  );
}

export default App;
