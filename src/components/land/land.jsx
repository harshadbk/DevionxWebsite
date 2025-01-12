import React, { useState, useEffect } from 'react';
import { useSprings, animated } from 'react-spring';
import { motion } from 'framer-motion';
import './land.css';

const Home = () => {
  const [splitWords, setSplitWords] = useState({ primary: [], secondary: [] });

  useEffect(() => {
    const primaryText = "Transforming Ideas";
    const secondaryText = "Into Digital Reality";

    setSplitWords({
      primary: primaryText.split(' '),
      secondary: secondaryText.split(' '),
    });
  }, []);

  const wordVariant = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { delay: index * 0.5, duration: 1.2, ease: 'easeOut' } 
    }),
    hover: { scale: 1.2, filter: 'blur(0px)', transition: { duration: 0.3 } }
  };

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
        <div className="content">
        <h1 className="primary-txt">
            {splitWords.primary.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={wordVariant}
                initial="hidden"
                animate="visible"
                style={{ marginRight: '10px', display: 'inline-block' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <br />

          <h1 className="secondary-txt">
            {splitWords.secondary.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={wordVariant}
                initial="hidden"
                animate="visible"
                style={{ marginRight: '10px', display: 'inline-block' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <p className="info">
            Empowering businesses with cutting-edge software solutions. From web development to AI & ML applications, we bring innovation to life.
          </p>

          {/* Buttons */}
          <div className="btns">
            <a href="/getmore" className="hover">Get Started</a>
            <a href="/learnmore" className="btn">Learn More</a>
          </div>
        </div>

        {/* Dashboard Cards */}
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
