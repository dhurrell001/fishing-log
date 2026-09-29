import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/homePage";
import CatchLogForm from "./pages/logCatch/catchLogPage";
import DisplayCatch from "./pages/displayCatchPage/displayCatch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/log-catch" element={<CatchLogForm />} />
        <Route path="/displayCatch" element={<DisplayCatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;