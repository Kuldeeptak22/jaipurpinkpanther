import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlayersPage from "./pages/PlayersPage";
import StandingsPage from "./pages/StandingsPage";
import FixturesPage from "./pages/FixturesPage";
import NewsPage from "./pages/NewsPage";
import Navbar from "./components/Navbar/Navbar";
import FooterPage from "./pages/FooterPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionPage from "./pages/TermsAndConditionPage";
import PlayerDetail from "./pages/PlayerDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="players" element={<PlayersPage />} />
          <Route path="standings" element={<StandingsPage />} />
          <Route path="fixtures" element={<FixturesPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="privacyPolicy" element={<PrivacyPolicyPage />} />
          <Route path="termsAndCondition" element={<TermsAndConditionPage />} />
          <Route path="players/playerDetails/:playerId" element={<PlayerDetail />} />
        </Routes>
        <FooterPage/>
      </Router>
    </div>
  );
}

export default App;
