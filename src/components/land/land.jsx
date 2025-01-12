import React, { useEffect } from 'react';
import './land.css';

const Home = () => {
  useEffect(() => {
    const ballsContainer = document.createElement('div');
    ballsContainer.className = 'balls-container';

    const numBalls = 50;

    for (let i = 0; i < numBalls; i++) {
      const ball = document.createElement('div');
      ball.className = 'ball';
      ball.style.width = `${Math.random() * 40 + 10}px`;
      ball.style.height = ball.style.width;
      ball.style.left = `${Math.random() * 100}%`;
      ball.style.animationDuration = `${Math.random() * 3 + 2}s`;
      ballsContainer.appendChild(ball);
    }

    document.getElementById('target-section').appendChild(ballsContainer);

    return () => {
      document.getElementById('target-section').removeChild(ballsContainer);
    };
  }, []);

  return (
    <div id="target-section" className="main-container">
      <main>
        <div className="balls-container"></div>
        <div className="content">
          <h1 className="primary-txt">Transforming Ideas</h1>
          <br />
          <h1 className="secondary-txt">Into Digital Reality</h1>
          <p className="info">
            Empowering businesses with cutting-edge software solutions. From web development to AI & ML applications, we bring innovation to life.
          </p>
          <div className="btns">
            <a href="/getmore" className="hover">Get Started</a>
            <a href="/learnmore" className="btn">Learn More</a>
          </div>
        </div>

        <div className="dashboard">
          <div className="card-container">
            <div className="card box-1">
              <h1 className="dashboard-heading blue">200+</h1>
              <p className="dashboard-para">Projects Completed</p>
            </div>
            <div className="card box-2">
              <h1 className="dashboard-heading purple">50+</h1>
              <p className="dashboard-para">Happy Clients</p>
            </div>
            <div className="card box-3">
              <h1 className="dashboard-heading dark-blue">15+</h1>
              <p className="dashboard-para">Expert Teams</p>
            </div>
            <div className="card box-4">
              <h1 className="dashboard-heading red">24/7</h1>
              <p className="dashboard-para">Support</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;