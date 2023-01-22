import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeBody from "./routes/Home/HomeBody";
import Home from "./routes/Home";
import Search from "./routes/Home/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
