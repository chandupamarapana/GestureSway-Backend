// HomePage.js

import Navbar from '../components/Navbar'
import Card from '../components/Card';
import aboutUsPic from '../assets/About_us.jpg';
import instructionPic from '../assets/instruction.jpeg';
import snakeGamePic from '../assets/snake game.png';
import feedbackPic from '../assets/feedback.jpeg';
import './global.css';
import Footer from '../components/Footer';
import Part1 from '../components/Part1';
import Test from '../components/Doctor';
import Part2 from '../components/Part2';

function HomePage() {
    return (
        <div style={{ backgroundImage: 'none', backgroundColor: 'rgb(235, 235, 235)' }}>
            <Navbar/>
            <Part2/>
            <br></br>
            <div className="container">
            <div className="row">
                <div className="col-md-3">
                <Card
                    image={aboutUsPic} 
                    title="About US" 
                    text="Introduction about the webapp and Team"
                    path="/IntroductionPage" 
                />
                </div>
                <div className="col-md-3">
                <Card
                    image={instructionPic} 
                    title="Instructions" 
                    text="Instructions on how to use the webapp and the Game"
                    path="/InstructionPage" 
                />
                </div>
                <div className="col-md-3">
                <Card 
                    image={snakeGamePic} 
                    title="Snake Game" 
                    text="Information about the snake game feature"
                    path="/GamePage" 
                />
                </div>
                <div className="col-md-3">
                <Card 
                    image={feedbackPic} 
                    title="Game Results Page" 
                    text="Please review the User's past game results here." 
                    path="/FeedbackPage" 
                />
                </div>
            </div>
            </div>
            <Part1/>
            <Test/>
            <Footer/>
        </div>
    );
}

export default HomePage;
