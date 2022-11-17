import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Mascota from './screens/Mascota';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar bg="light" variant="light">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Petfinder (React proyect)</Navbar.Brand>
                
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/mascotas/:slug" element={<Mascota />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
