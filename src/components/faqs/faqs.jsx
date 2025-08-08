import React, { useState } from "react";
import "./faqs.css";

const data = [
  {
    title: "What is staff augmentation?",
    content: "Staff augmentation is a flexible outsourcing strategy that enables businesses to hire skilled professionals on a temporary, contract, or long-term basis to meet specific project or operational needs.",
  },
  {
    title: "Which industries do you serve?",
    content: "We provide staffing solutions across multiple industries, including IT & Software, Healthcare, BFSI, Manufacturing, E-commerce, Telecom, Logistics, Education, and more.",
  },
  {
    title: "What types of staffing services do you offer?",
    content: "We offer IT and Non-IT Staff Augmentation, Permanent Hiring, Contract Staffing, Project-Based Hiring, RPO (Recruitment Process Outsourcing), and Remote Staffing Solutions.",
  },
  {
    title: "Do you only provide IT staff?",
    content: "No. While we specialize in IT staff, we also provide professionals for non-IT roles such as HR, finance, administration, marketing, and operations.",
  },
  {
    title: "What is the role of testing in software development?",
    content: "Testing ensures the quality of software by identifying bugs, verifying functionalities, and ensuring the application meets user requirements. It involves unit testing, integration testing, and acceptance testing.",
  },
  {
    title: "What is the difference between front-end and back-end development?",
    content: "Front-end development focuses on the user interface and experience, while back-end development handles server-side logic, databases, and the functionality that powers the app.",
  },
  {
    title: "What are the best practices for writing clean code?",
    content: "Best practices include writing meaningful variable and function names, keeping functions short and focused, avoiding repetition (DRY principle), and properly documenting code.",
  },
  {
    title: "How can you ensure software scalability?",
    content: "Software scalability can be achieved by writing efficient code, using proper architecture patterns like microservices, and ensuring the infrastructure can handle increased load, such as through load balancing and database sharding.",
  },
  {
    title: "What tools are commonly used in software development?",
    content: "Common tools include Visual Studio Code, Git, Jira, Docker, Jenkins, GitHub, React, Angular, Node.js, and various testing frameworks like Jest and Mocha.",
  },
  {
    title: "What is the role of a software architect?",
    content: "A software architect designs the high-level structure of a system, making decisions on technologies, tools, and frameworks, and ensuring that the system is scalable, reliable, and meets user needs.",
  },
];

const styles = {
  bgColor: "var(--primary-color)",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "white",
  arrowColor: "white",
  arrowIcon: "▼",
  rowContentPadding: "10px",
  rowContentPaddingTop: "10px",
  rowContentPaddingLeft: "10px",
};

// const config = {
//   animate: true,
//   arrowIcon: "▼",
//   tabFocus: true,
// };

const FaqComp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" style={{ backgroundColor: styles.bgColor }}>
      <div className="faq">
        <div className="faq-head" style={{ color: styles.titleTextColor }}>
          FREQUENTLY ASKED QUESTIONS
        </div>
        {data.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              style={{ color: styles.rowTitleColor }}
              onClick={() => toggleAnswer(index)}
            >
              <span>{item.title}</span>
              <span className={`faq-arrow ${activeIndex === index ? "active" : ""}`}>▼</span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "active" : ""}`}
              style={{
                padding: styles.rowContentPadding,
                paddingTop: styles.rowContentPaddingTop,
                paddingLeft: styles.rowContentPaddingLeft,
                color: styles.rowContentColor,
              }}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComp;
