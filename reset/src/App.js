import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Reset from './Components/reset';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/auth/reset-password" element={<Reset />} />
          <Route path="/" element={<Navigate to={"/auth/reset-password"}></Navigate>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
