import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Projects from './pages/ProjectsPage';

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        <Footer />
      </ Router>
    </>
  );
}

export default App;
