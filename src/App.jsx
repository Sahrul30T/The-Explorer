import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_page from "./pages/mahasiswa/landing_page.jsx";
import Page_about from "./pages/mahasiswa/page_about.jsx";
import Page_event from "./pages/mahasiswa/page_event.jsx";
import Login from "./pages/anggota/login.jsx";
import Landingpage from "./pages/anggota/Landing_page.jsx";
import Profile from "./components/user/profile.jsx";
import Page_aboutUser from './pages/mahasiswa/page_about.jsx'
import Page_eventUser from './pages/mahasiswa/page_event.jsx'
import DashboardAdmin from './pages/admin/Dashboard.jsx'
import Layanan from './components/keuangan/PengajuanDana.jsx'
import PengajuanDana from "./components/keuangan/PengajuanDana1.jsx"
// admin
import Register from "./pages/admin/Registrasi.jsx"
import SuratSek from "./pages/admin/TemplateSuratSekretaris.jsx"
import SubmitSek from "./pages/admin/SubmitSek.jsx"
import Bendahara from "./pages/admin/Bendahara.jsx"

import { useEffect, useState } from "react";
import { getStorage } from "./utils/index.jsx";

const App = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const AmbilData = async () => {
      const response = await getStorage("profile");
      setProfile(response?.Data);
    };

    AmbilData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* umum */}
          <Route element={<Landing_page />} path="umum/" />
          <Route element={<Page_about />} path="umum/about" />
          <Route element={<Page_event />} path="umum/event" />
          <Route element={<Login />} path="User/login" />
          {/* user */}
          <Route element={<Landingpage />} path="User/Landing_page" />
          <Route element={<Profile />} path="User/Profile" />
          <Route element={<Page_aboutUser />} path="User/about" />
          <Route element={<Page_eventUser />} path="User/event" />
          <Route element={<Layanan />} path="User/layanan" />
          <Route element={<PengajuanDana />} path="User/PengajuanDana" />

          {/* admin */}
          <Route element={<DashboardAdmin/>} path="Admin/Home"/>
          <Route element={<Register/>} path="Admin/Register"/>
          <Route element={<SuratSek/>} path="Admin/SuratSek"/>
          <Route element={<SubmitSek/>} path="Admin/SubmitSek"/>
          <Route element={<Bendahara/>} path="Admin/Bendahara"/>

          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
