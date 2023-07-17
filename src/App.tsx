import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AnotherScreen from "./components/AnotherScreen";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/another" element={<AnotherScreen />} />
    </Routes>
  );
}
