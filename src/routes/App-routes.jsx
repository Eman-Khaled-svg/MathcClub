import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Home from '../pages/home.jsx';
import College from '../pages/college.jsx';
import Video from '../pages/video.jsx';
import Login from '../Register/Login.jsx';
import Register from '../Register/Register.jsx';

function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/college/:collegeId" element={<College />} />
            <Route path="/video/:videoId" element={<Video />} />
            <Route path="/login" element={<Login />} />
            <Route path='/register' element={<Register/>}/>  

          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;