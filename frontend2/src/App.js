import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Create from "./Components/Create";
import Navbar from "./Components/Navbar";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";

function App() {
  const myWidth = 220;
  return (
    <div>
      <Navbar
        drawableWidth={myWidth}
        content={
          <Routes>
            <Route exact path="" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/edit/:id" element={<Edit />} />
            <Route exact path="/delete/:id" element={<Delete />} />
          </Routes>
        }
      />
    </div>
  );
}

export default App;
