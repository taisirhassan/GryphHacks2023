import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chatbox from "./pages/Chatbox";

 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="chatbox" element={<Chatbox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App