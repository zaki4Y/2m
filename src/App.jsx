
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './layouts/header';
import Navbar from './pages/Home/components/Navbar';

import { HomePage } from './pages/Home/home';
import { Footer } from './layouts/footer';
import { Teams } from './pages/Teams/Teams';
import { Contact } from './pages/Contact/Contact';
import { TableSection } from './pages/Table/components/TableSection';
import { Table } from './pages/Table/Table';
import { Profile } from './pages/Profile/Profile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/Profile" element={<Navigate to="/Profile/1" />} />

       
      </Routes>
      <Footer />
    </>
  );
}

export default App;

