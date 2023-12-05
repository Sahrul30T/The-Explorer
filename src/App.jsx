import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_page from "./pages/mahasiswa/landing_page.jsx";
import Page_about from "./pages/mahasiswa/page_about.jsx";
import Page_event from "./pages/mahasiswa/page_event.jsx";
import Login from "./pages/anggota/login.jsx";
import Landingpage from "./pages/anggota/Landing_page.jsx";
import Profile from "./components/user/profile.jsx";
import { Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* umum */}
          <Route element={<Landing_page />} path="umum/" />
          <Route element={<Page_about />} path="umum/about" />
          <Route element={<Page_event />} path="umum/event" />
          {/* user */}
          <Route element={<Login />} path="User/login" />
          <Route element={<Landingpage />} path="User/Landing_page" />
          <Route element={<Profile />} path="User/Profile" />
          {/* admin */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
