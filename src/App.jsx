import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dasaboard_N_L from "./pages/Mahasiswa/Dasaboard_N_L";
import Landing_page from "./pages/mahasiswa/landing_page";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Dasaboard_N_L />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
