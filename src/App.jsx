import { HashRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import Home from './pages/Home'
import Recipes from './pages/Menu'
import Connect from './pages/Connect'
import './App.css'

function App() {
  const year = new Date().getFullYear()

  return (
    <HashRouter>
    <div className="page-shell">

      {/* ── Sticky Nav ── */}
      <nav className="main-nav">
        <Link to="/" className="brand">Pāka Bakehouse</Link>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/recipes">Recipes</NavLink></li>
          <li><NavLink to="/connect">Follow Along</NavLink></li>
        </ul>
      </nav>

      {/* ── Page Routes ── */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>

      {/* ── Footer ── */}
      <footer>
        <p className="brand">Pāka Bakehouse</p>
        <p className="footer-copy">© {year} pāka bakehouse · Made with love in Canada</p>
      </footer>

    </div>
    </HashRouter>
  )
}

export default App

