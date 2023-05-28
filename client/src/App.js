import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chatbox from "./pages/Chatbox";
import Options from "./pages/Options";
import Documents from "./pages/Documents";
import Videos from "./pages/Videos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="chatbox" element={<Chatbox />} />
          <Route path="options" element={<Options />} />
          <Route path="documents" element={<Documents />} />
          <Route path="videos" element={<Videos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
