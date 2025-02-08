import React from "react";
import { FaLaptop, FaCog, FaMobileAlt, FaCloud } from "react-icons/fa";
import "./Technologies.css"; 

const Technologies = () => {
  return (
    <div className="technologies-container">
      <div className="text-center mb-12">
        <h1 className="technologies-heading">Technologies We Master</h1>
        <p className="technologies-subheading">
          We leverage the latest technologies to build scalable and robust solutions for your business
        </p>
      </div>
      <div className="technologies-grid">
        <div className="technology-card frontend">
          <div className="icon-wrapper">
            <FaLaptop className="card-icon" />
          </div>
          <h1 className="card-title">Frontend</h1>
          <ul className="card-list">
            <li>React.js</li>
            <li>Angular</li>
            <li>Vue.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="technology-card backend">
          <div className="icon-wrapper">
            <FaCog className="card-icon" />
          </div>
          <h1 className="card-title">Backend</h1>
          <ul className="card-list">
            <li>Node.js</li>
            <li>Python</li>
            <li>Java Spring</li>
            <li>.NET Core</li>
            <li>PHP Laravel</li>
          </ul>
        </div>
        <div className="technology-card mobile">
          <div className="icon-wrapper">
            <FaMobileAlt className="card-icon" />
          </div>
          <h1 className="card-title">Mobile</h1>
          <ul className="card-list">
            <li>React Native</li>
            <li>Flutter</li>
            <li>iOS Swift</li>
            <li>Android Kotlin</li>
            <li>Xamarin</li>
          </ul>
        </div>
        <div className="technology-card cloud">
          <div className="icon-wrapper">
            <FaCloud className="card-icon" />
          </div>
          <h1 className="card-title">Cloud&DevOps</h1>
          <ul className="card-list">
            <li>AWS</li>
            <li>Azure</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Jenkins</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
