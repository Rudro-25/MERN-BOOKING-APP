import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
//import Layout from "./layouts/Layouts";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header></Header>} />
        {/* <Route path="/search" element={<>Search Page</>} />
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
