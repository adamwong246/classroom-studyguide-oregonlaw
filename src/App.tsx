import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import LicenseMonGame from './LicenseMonGame';
import Pokedex from './components/Pokedex';
import './styles/GameboyTheme.scss';

function App() {
  return (
    <Router>
      <Container fluid className="p-0 min-vh-100 d-flex flex-column">
        <Navbar bg="gb-dark" expand="lg" className="mb-4 pixel-border">
          <Container>
            <Navbar.Brand as={NavLink} to="/" className="text-white">
              <h1 className="m-0" style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '24px' }}>LICENSEMON</h1>
              <p className="m-0 small" style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '10px' }}>GOTTA KNOW THEM ALL!</p>
            </Navbar.Brand>

                <Nav.Link as={NavLink} to="/game" className="text-white pixel-btn">
                  GAME
                </Nav.Link>
                <Nav.Link as={NavLink} to="/pokedex" className="text-white pixel-btn">
                  LICENSEDEX
                </Nav.Link>

          </Container>
        </Navbar>

        <Container fluid className="flex-grow-1 mb-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<LicenseMonGame />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>

        <footer className="bg-gb-dark text-white text-center p-2 pixel-border">
          <small>Oregon Cosmetology Rules Trainer</small>
        </footer>
      </Container>
    </Router>
  );
}

export default App;
