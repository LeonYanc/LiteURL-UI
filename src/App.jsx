import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Links from './components/Links'
import Analytics from './components/Analytics'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
      <Navbar />
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Router>
    </>
  )
}

export default App