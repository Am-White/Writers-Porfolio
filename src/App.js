import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/ContactPage';
import Projects from './pages/ProjectsPage';
import OfferPage from './pages/OfferPage';
import AboutHelen from './pages/AboutHelenPage';
import AboutJake from './pages/AboutJakePage';

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/services" element={<OfferPage/>} />
            <Route path="/About Helen" element={<AboutHelen/>} />
            <Route path="/About Jake" element={<AboutJake/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        <Footer />
      </ Router>
    </>
  );
}

export default App;
