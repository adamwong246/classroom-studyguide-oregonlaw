import { useEffect, useState } from 'react';
import LicenseMonDisplay from './LicenseMonDisplay';

interface LicenseMon {
  id: number;
  name: string;
  type: string;
  question: string;
  options: string[];
  correctAnswer: string;
  description?: string;
}

/**
 * Shuffles array elements using Fisher-Yates algorithm
 * @param array The array to shuffle
 * @returns New array with shuffled elements
 */
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

/**
 * Initializes game state with shuffled questions and reset stats
 */

import licenseMonsData from './licenseMons.json';
import { Container } from 'react-bootstrap';

const licenseMons: LicenseMon[] = licenseMonsData.map(mon => ({
  ...mon,
  options: shuffleArray(mon.options) // Shuffle answer options
}));

export default function LicenseMonGame() {
  const [currentMon, setCurrentMon] = useState<LicenseMon | null>(null);
  const [score, setScore] = useState(0);
  const [licenseLevel, setLicenseLevel] = useState('Apprentice');
  const [feedback, setFeedback] = useState('');
  const [questionOrder, setQuestionOrder] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const initializeGame = () => {
    // Create shuffled order of all questions
    const shuffledOrder = [...Array(licenseMons.length).keys()]
      .sort(() => Math.random() - 0.5);
    setQuestionOrder(shuffledOrder);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setGameWon(false);
    setCurrentMon(licenseMons[shuffledOrder[0]]);
  };

  const getNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex >= licenseMons.length) {
      // Check if player answered 75%+ correctly
      if (correctAnswers / licenseMons.length >= 0.75) {
        setGameWon(true);
      } else {
        // Restart game if not enough correct answers
        initializeGame();
      }
    } else {
      setCurrentQuestionIndex(nextIndex);
      setCurrentMon(licenseMons[questionOrder[nextIndex]]);
    }
    setFeedback('');
  };

  const handleAnswer = (answer: string) => {
    if (!currentMon) return;
    
    // Compare against original correct answer since options are shuffled
    const originalMon = licenseMonsData.find(m => m.id === currentMon.id);
    if (answer === originalMon?.correctAnswer) {
      setScore(score + 100);
      setCorrectAnswers(correctAnswers + 1);
      setFeedback(`Correct! You caught ${currentMon.name}!`);
      
      // Level up logic
      if (score >= 500 && score < 1500) setLicenseLevel('Journeyman');
      if (score >= 1500) setLicenseLevel('Master Stylist');
    } else {
      setFeedback(`Violation! The correct answer was: ${currentMon.correctAnswer}`);
    }
    
    // Removed the automatic timeout - now user clicks "Next Question"
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <Container className="p-0">
      <div className="d-flex justify-content-between mb-3">
        <div className="pixel-card p-2">
          <span>LICENSE: {licenseLevel}</span>
        </div>
        <div className="pixel-card p-2">
          <span>SCORE: {score}</span>
        </div>
      </div>

      {currentMon && (
        <div className="pixel-card mb-3">
          <div className="card-header">{currentMon.name}</div>

          <h5 className="mb-3">A WILD {currentMon.name.toUpperCase()} APPEARED!</h5>

          <div className="card-body">
            <LicenseMonDisplay mon={currentMon} />
            <p className="mt-3 mb-3">{currentMon.question}</p>
            <div className="row g-2">
              {currentMon.options.map((option, index) => (
                <div key={index} className="col-md-6">
                  <button 
                    className="pixel-btn w-100"
                    onClick={() => handleAnswer(option)}
                    style={{
                      fontFamily: '"Press Start 2P", monospace',
                      fontSize: '10px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {option}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {feedback && (
        <div className="pixel-card mb-3">
          <div className="card-body text-center">
            <p className="mb-3">{feedback}</p>
            <button 
              className="pixel-btn"
              onClick={getNextQuestion}
            >
              NEXT QUESTION
            </button>
          </div>
        </div>
      )}

      {gameWon && (
        <div className="pixel-card text-center">
          <div className="card-header">CONGRATULATIONS!</div>
          <div className="card-body">
            <p>You've mastered all Oregon Cosmetology Rules!</p>
            <p>FINAL SCORE: {score}</p>
            <p>LICENSE LEVEL: {licenseLevel}</p>
            <button 
              className="pixel-btn"
              onClick={initializeGame}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}
    </Container>
  );
}
