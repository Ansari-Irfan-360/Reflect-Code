import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Toast from "./components/toast/Toast";
import EditorPage from "./pages/EditorPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/editor/:roomId" element={<EditorPage />} />
        </Routes>
      </Router>
      <Toast />
    </>
  );
};

export default App;
