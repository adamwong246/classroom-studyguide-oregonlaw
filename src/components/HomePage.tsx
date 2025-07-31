import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <div className="pixel-card p-4 mb-4">
        <h1 className="mb-4">LICENSEMON</h1>
        <p className="mb-4">GOTTA KNOW THEM ALL!</p>
        <p className="small mb-4">Oregon Cosmetology Rules Trainer</p>
      </div>

      <div className="d-grid gap-3">
        <Button 
          variant="primary" 
          className="pixel-btn"
          onClick={() => navigate('/game')}
        >
          START GAME
        </Button>
        <Button 
          variant="secondary" 
          className="pixel-btn"
          onClick={() => navigate('/pokedex')}
        >
          LICENSE DEX
        </Button>
      </div>

      <div className="pixel-card mt-4 p-3">
        <p className="small">
          Test your knowledge of Oregon cosmetology rules<br />
          through this fun Pokémon-style game!
        </p>
      </div>
    </Container>
  );
}
