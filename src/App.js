import { Routes, Route } from "react-router-dom";
import Home from './Container/Home';
import Summarize from "./Container/Summarize";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/summary" element={<Summarize />} />
        <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
