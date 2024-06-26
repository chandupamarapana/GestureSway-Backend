import HomePage from './pages/HomePage';
import IntroductionPage from './pages/IntroductionPage';
import InstructionPage from './pages/InstructionPage';
import GamePage from './pages/GamePage';
import FeedbackPage from './pages/FeedbackPage';
import LoginPage from './pages/LoginPage';
import GameControlsPage from './pages/GameControls';
import snakeGame from './pages/snakeGame';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/IntroductionPage' Component={IntroductionPage} />
          <Route path='/InstructionPage' Component={InstructionPage} />
          <Route path='/GamePage' Component={GamePage} />
          <Route path='/FeedbackPage' Component={FeedbackPage} />
          <Route path='/LoginPage' Component={LoginPage} />
          <Route path='/' Component={HomePage} />
          <Route path='/HomePage' Component={HomePage} />
          <Route path='/GameControls' Component={GameControlsPage} />
          <Route path='/SnakeGame' Component={snakeGame} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
