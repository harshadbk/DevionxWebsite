import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "../countup";
import "./land.css";

const Home = () => {
  const [splitWords, setSplitWords] = useState({ primary: [], secondary: [] });

  useEffect(() => {
    const primaryText = "Transforming Ideas";
    const secondaryText = "Into Digital Reality";

    setSplitWords({
      primary: primaryText.split(" "),
      secondary: secondaryText.split(" "),
    });
  }, []);

  const wordVariant = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: index * 0.5, duration: 1, ease: "easeOut" },
    }),
    hover: { scale: 1.2, filter: "blur(0px)", transition: { duration: 0.3 } },
  };

  useEffect(() => {
    const ballsContainer = document.createElement("div");
    ballsContainer.className = "balls-container";
    const numBalls = 50;

    for (let i = 0; i < numBalls; i++) {
      const ball = document.createElement("div");
      ball.className = "ball";
      ball.style.width = `${Math.random() * 40 + 10}px`;
      ball.style.height = ball.style.width;
      ball.style.left = `${Math.random() * 100}%`;
      ball.style.animationDuration = `${Math.random() * 3 + 2}s`;
      ballsContainer.appendChild(ball);
    }

    document.getElementById("target-section").appendChild(ballsContainer);

    return () => {
      // document.getElementById('target-section').removeChild(ballsContainer);
      const targetSection = document.getElementById("target-section");
      if (targetSection && ballsContainer) {
        targetSection.removeChild(ballsContainer);
      }
    };
  }, []);

  return (
    <div id="target-section" className="main-container ">
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
                style={{ marginRight: "10px", display: "inline-block" }}
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
                style={{ marginRight: "10px", display: "inline-block" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <p className="info">
            Empowering businesses with cutting-edge software solutions. From web
            development to AI & ML applications, we bring innovation to life.
          </p>

          {/* Buttons */}
          <div className="btns">
            <a href="/getmore" className="hover">
              Get Started
            </a>
            <a href="/learnmore" className="btn2">
              Learn More
            </a>
          </div>
        </div>

        {/* Dashboard Cards */}

        <div class="class-1   relative w-[70%] h-[70%] mt-20">
          <div class="class-2 absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20 animate-pulse "></div>
          <div class="dashboards class-3 relative w-full h-full bg-white p-2 rounded-2xl shadow-xl flex items-center justify-center">
            <div class="class-4 grid grid-cols-2 grid-rows-2 gap-4 w-[95%] h-[90%]">



              <div class="bg-blue-50 p-4 rounded-xl cards">
                <div class="text-purple-600 text-5xl font-bold mb-2 inline-flex items-center">
                  <CountUp
                    to={50}
                    from={0}
                    delay={0}
                    duration={2}
                    className="count-up"
                  />
                  <div class="ml-1">+</div>
                </div>

                <div class="text-gray-600">Projects Completed</div>
              </div>



              <div class="bg-purple-50 p-4 rounded-xl cards">
                <div class="text-purple-600 text-5xl font-bold mb-2 inline-flex items-center">
                  <CountUp
                    to={50}
                    from={0}
                    delay={0}
                    duration={2}
                    className="count-up"
                    wrapper="div"
                  />
                  <div class="ml-1">+</div>
                </div>
                <div class="text-gray-600">Happy Clients</div>
              </div>

              <div class="bg-indigo-50 p-4 rounded-xl cards">
                <div class="text-indigo-600 text-5xl font-bold mb-2 inline-flex items-center">
                  <CountUp
                    to={15}
                    from={0}
                    delay={0}
                    duration={2}
                    className="count-up"
                  />
                  <div class="ml-1">+</div>
                </div>
                <div class="text-gray-600">Expert Teams</div>
              </div>

              <div class="bg-pink-50 p-4 rounded-xl cards">
                <div class="text-pink-600 text-5xl font-bold mb-2 inline-flex items-center">
                  <CountUp
                    to={24}
                    from={0}
                    delay={0}
                    duration={2}
                    className="count-up"
                  />
                  <div class="ml-1">/7</div>
                </div>
                <div class="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="dashboard">
          <div className="card-container">
            <div className="card box-1">
              <h1 className="dashboard-heading blue">
                <CountUp to={200} from={0} delay={0} duration={2} className="count-up" />
                +
              </h1>
              <p className="dashboard-para">Projects Completed</p>
            </div>
            <div className="card box-2">
              <h1 className="dashboard-heading purple">
                <CountUp to={50} from={0} delay={0} duration={2} className="count-up" />
                +
              </h1>
              <p className="dashboard-para">Happy Clients</p>
            </div>
            <div className="card box-3">
              <h1 className="dashboard-heading dark-blue">
                <CountUp to={15} from={0} delay={0} duration={2} className="count-up" />
                +
              </h1>
              <p className="dashboard-para">Expert Teams</p>
            </div>
            <div className="card box-4">
              <h1 className="dashboard-heading red">
                <CountUp to={24} from={0} delay={0} duration={2} className="count-up" />
                /7
              </h1>
              <p className="dashboard-para">Support</p>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default Home;
