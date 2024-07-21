import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import DocumentViewer from "./pages/DocumentsViewer";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/document/:fileName" element={<DocumentViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
