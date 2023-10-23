import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import './styles/NavBar.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Reservation' element={<Reservation />} />
      </Routes>
      <Footer />
    </Router>
    <div>
    <meta property="og:title" content="My Page Title" />
    <meta property="og:description" content="This is the description of my page." />
    <meta property="og:image" content="" />
    </div>
    </div>

  );
};

export default App;