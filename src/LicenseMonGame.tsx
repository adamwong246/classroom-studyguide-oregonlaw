import { useEffect, useState } from 'react';

type LicenseMon = {
  id: number;
  name: string;
  type: string;
  question: string;
  options: string[];
  correctAnswer: string;
};

const licenseMons: LicenseMon[] = [
  {
    id: 1,
    name: 'Disinfectle',
    type: 'water',
    question: 'How long must tools soak in disinfectant?',
    options: ['5 minutes', '10 minutes', '30 seconds', 'Until dry'],
    correctAnswer: '10 minutes'
  },
  {
    id: 2,
    name: 'Glowgiene',
    type: 'fairy',
    question: 'When must gloves be worn?',
    options: ['Shampooing', 'Applying color', 'Blowdrying', 'All of the above'],
    correctAnswer: 'Applying color'
  },
  // Add more LicenseMons from COS-Rules.txt
];

export default function LicenseMonGame() {
  const [currentMon, setCurrentMon] = useState<LicenseMon | null>(null);
  const [score, setScore] = useState(0);
  const [licenseLevel, setLicenseLevel] = useState('Apprentice');
  const [feedback, setFeedback] = useState('');

  const getRandomMon = () => {
    const randomIndex = Math.floor(Math.random() * licenseMons.length);
    setCurrentMon(licenseMons[randomIndex]);
    setFeedback('');
  };

  const handleAnswer = (answer: string) => {
    if (!currentMon) return;
    
    if (answer === currentMon.correctAnswer) {
      setScore(score + 100);
      setFeedback(`Correct! You caught ${currentMon.name}!`);
      
      // Level up logic
      if (score >= 500 && score < 1500) setLicenseLevel('Journeyman');
      if (score >= 1500) setLicenseLevel('Master Stylist');
    } else {
      setFeedback(`Violation! The correct answer was: ${currentMon.correctAnswer}`);
    }
    
    setTimeout(getRandomMon, 1500);
  };

  useEffect(() => {
    getRandomMon();
  }, []);

  return (
    <div className="game-container">
      <div className="player-stats">
        <p>License: {licenseLevel}</p>
        <p>Score: {score}</p>
      </div>
      
      {currentMon && (
        <div className={`license-mon ${currentMon.type}`}>
          <h2>A wild {currentMon.name} appeared!</h2>
          <p className="question">{currentMon.question}</p>
          <div className="options">
            {currentMon.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {feedback && <p className="feedback">{feedback}</p>}
    </div>
  );
}
