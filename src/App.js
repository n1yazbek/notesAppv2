import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/notes/:id" element={<NotePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
