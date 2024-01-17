import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PhotoPage from "./Pages/Photo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/photography" element={<PhotoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
