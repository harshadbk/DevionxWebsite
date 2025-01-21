import React, { useState } from "react";
import './portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectsIcon from "../assets/Projects.png";
import ExpertsIcon from "../assets/ExpertsIcon.png";
import CustomersIcon from "../assets/CustomersIcon.png";
import SuccessIcons from "../assets/SuccessIcon.png";
import CountUp from "../components/countup";
import LinerApp from "../assets/linear_app.webp";
import Slider from "react-slick";

const Portfolio1 = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(3);

  const techColors = {
    React: "bg-blue-100 text-blue-600",
    "Node.js": "bg-green-100 text-green-600",
    MongoDB: "bg-yellow-100 text-yellow-600",
    Flutter: "bg-purple-100 text-purple-600",
    Firebase: "bg-orange-100 text-orange-600",
    "ML Kit": "bg-pink-100 text-pink-600",
    Python: "bg-indigo-100 text-indigo-600",
    TensorFlow: "bg-red-100 text-red-600",
    "Vue.js": "bg-teal-100 text-teal-600",
    Angular: "bg-cyan-100 text-cyan-600",
    Django: "bg-gray-100 text-gray-600",
    WebRTC: "bg-lime-100 text-lime-600",
    IoT: "bg-emerald-100 text-emerald-600",
    MQTT: "bg-amber-100 text-amber-600",
    "Next.js": "bg-sky-100 text-sky-600",
    "React Native": "bg-fuchsia-100 text-fuchsia-600",
    "Spring Boot": "bg-rose-100 text-rose-600",
    PostgreSQL: "bg-violet-100 text-violet-600",
  };

  const projects = [
    {
      id: 1,
      title: "Online Retail Solution",
      category: "Web Development",
      description: "Complete e-commerce platform with inventory management and payment integration.",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "bg-gradient-to-br from-blue-500 to-purple-500",
    },
    {
      id: 2,
      title: "Medical Management System",
      category: "Web Development",
      description: "Telemedicine platform with patient management and appointment scheduling.",
      tech: ["Flutter", "Firebase", "ML Kit"],
      gradient: "bg-gradient-to-br from-green-500 to-blue-500",
    },
    {
      id: 3,
      title: "Business Intelligence Platform",
      category: "Mobile Apps",
      description: "AI-powered analytics dashboard for real-time business insights.",
      tech: ["Python", "TensorFlow", "Vue.js"],
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "E-Learning System",
      category: "Web Development",
      description: "Comprehensive learning management system with video conferencing.",
      tech: ["Angular", "Django", "WebRTC"],
      gradient: "bg-gradient-to-br from-yellow-500 to-red-500",
    },
    {
      id: 5,
      title: "Banking Application",
      category: "Fintech Solution",
      description: "Secure mobile banking application with real-time transactions.",
      tech: ["React Native", "Spring Boot", "PostgreSQL"],
      gradient: "bg-gradient-to-br from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      title: "Smart Home Control",
      category: "AI Solutions",
      description: "IoT-based smart home monitoring and control system.",
      tech: ["IoT", "MQTT", "Next.js"],
      gradient: "bg-gradient-to-br from-pink-500 to-purple-500",
    },
    {
      id: 7,
      title: "Cloud-Based File Storage and Sharing Platform",
      category: "Cloud Services",
      description: "Cloud-based storage and file sharing platform.",
      tech: ["IoT", "MQTT", "Next.js"],
      gradient: "bg-gradient-to-br from-yellow-500 to-purple-500",
    },
    {
      id: 11,
      title: "Cloud-Based File Storage and Sharing Platform",
      category: "Cloud Services",
      description: "Cloud-based storage and file sharing platform.",
      tech: ["IoT", "MQTT", "Next.js"],
      gradient: "bg-gradient-to-br from-orange-500 to-purple-500",
    },
    {
      id: 8,
      title: "Serverless Computer",
      category: "Mobile Apps",
      description: "Serverless compute platform for scalable applications.",
      tech: ["IoT", "MQTT", "Next.js"],
      gradient: "bg-gradient-to-br from-red-500 to-purple-500",
    },
    {
      id: 10,
      title: "Cloud-Based File Storage and Sharing Platform",
      category: "AI Solutions",
      description: "Cloud-based storage and file sharing platform.",
      tech: ["IoT", "MQTT", "Next.js"],
      gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
    },
    {
      id: 9,
      title: "Cloud-Based File Storage and Sharing Platform",
      category: "AI Solutions",
      description: "Cloud-based storage and file sharing platform.",
      tech: ["IoT", "MQTT", "Next.js"],
      gradient: "bg-gradient-to-br from-green-500 to-purple-500",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const visibleFilteredProjects = filteredProjects.slice(0, visibleProjects);
  
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: filteredProjects.length === 1 ? 1 : 3,
    slidesToScroll: 3,
     responsive: [
    {
      breakpoint: 1024, // Tablets
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768, // Mobile
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  };
  

  return (
    <>
    <section id="Portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our successful projects and innovative solutions that have helped businesses transform digitally.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Web Development", "Mobile Apps", "AI Solutions", "Cloud Services"].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-blue-50"
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <Slider {...settings}>
          {visibleFilteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className={`relative h-64 ${project.gradient}`}>
                <div className="custom-container">
                  <span className="text-lg font-semibold">{project.title}</span>
                </div>
                <div className="mylogo">
                  <img src={LinerApp} alt="Project" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${techColors[tech] || "bg-gray-100 text-gray-600"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleProjects(filteredProjects.length)}
              className="btn"
            >
              Load More Projects
            </button>
          </div>
        )}

        {visibleProjects > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleProjects(3)}
              className="btn"
            >
              Load Less Projects
            </button>
          </div>
        )}
      </div>
    </section>
  
      <section
        id="Testimonials"
        class="py-20 bg-gradient-to-b from-white to-blue-50"
      >
        <div class="container mx-auto px-4">
          {/* <!-- Section Header --> */}
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">
              <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working
              with DevionX Technologies.
            </p>
          </div>

          {/* <!-- Testimonials Grid --> */}
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Testimonial 1 --> */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-header-left">
                  <div className="avatar">
                    <span className="avatar-text">JD</span>
                  </div>
                  <div className="name-header">
                    <h4 className="name">John Doe</h4>
                    <p className="designation">CEO, Tech Solutions Inc</p>
                  </div>
                </div>
              </div>
              <div className="rating">
                <div className="stars">
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <p className="testimonial-text">
                "DevionX Technologies delivered an exceptional e-commerce platform that exceeded our expectations. Their expertise in both frontend and backend development is remarkable."
              </p>
            </div>

            {/* <!-- Testimonial 2 --> */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-header-left">
                  <div className="avatar">
                    <span className="avatar-text">SJ</span>
                  </div>
                  <div className="name-header">
                    <h4 className="name">Shonne Joy</h4>
                    <p className="designation">CEO, Blue Altair</p>
                  </div>
                </div>
              </div>
              <div className="rating">
                <div className="stars">
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <p className="testimonial-text">
                "The AI-powered analytics solution provided by DevionX has
                transformed our decision-making process. Their team's technical
                expertise is outstanding."
              </p>
            </div>

            {/* <!-- Testimonial 3 --> */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-header-left">
                  <div className="avatar">
                    <span className="avatar-text">MP</span>
                  </div>
                  <div className="name-header">
                    <h4 className="name">Mike Peterson</h4>
                    <p className="designation">Founder, EduTech</p>
                  </div>
                </div>
              </div>
              <div className="rating">
                <div className="stars">
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <p className="testimonial-text">
                "Working with DevionX on our educational platform was a game-changer. Their innovative approach and dedication to quality is unmatched Their team's technical expertise is outstanding.."
              </p>
            </div>
          </div>

          {/* <!-- Client Logos --> */}
          <div className="mt-20">
            <h3 className="text-center text-xl font-bold mb-12">
              Trusted by Leading Companies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
              {/* <!-- Successful Projects --> */}
              <div className="text-center bg-white rounded-xl shadow-lg hover:shadow-xl p-6 max-h-[200px]">
                <img
                  src={ProjectsIcon}
                  alt="Projects Icon"
                  class="mx-auto h-12 mb-4"
                />
                <p class="text-3xl font-bold">
                  <CountUp to={50} from={0} delay={0.5} duration={0.5} className="count-up" />
                  <span class="text-black-600">+</span>
                </p>
                <p class="text-black">Successful Projects</p>
              </div>
              {/* <!-- Software Development Experts --> */}
              <div class="text-center bg-white rounded-xl shadow-lg hover:shadow-xl p-6 max-h-[200px]">
                <img
                  src={ExpertsIcon}
                  alt="Experts Icon"
                  class="mx-auto h-12 mb-4"
                />
                <p class="text-3xl font-bold">
                  <CountUp to={30} from={0} delay={0.5} duration={0.5} className="count-up" />
                  <span class="text-black-600">+</span>
                </p>
                <p class="text-black">Software Development Experts</p>
              </div>
              {/* <!-- Loyal Customers --> */}
              <div class="text-center bg-white rounded-xl shadow-lg hover:shadow-xl p-6 max-h-[200px]">
                <img
                  src={CustomersIcon}
                  alt="Customers Icon"
                  class="mx-auto h-12 mb-4"
                />
                <p class="text-3xl font-bold">
                  <CountUp to={50} from={0} delay={0.5} duration={0.5} className="count-up" />
                  <span class="text-black-600">+</span>
                </p>
                <p class="text-black">Loyal Customers</p>
              </div>
              {/* <!-- Success Guarantees --> */}
              <div class="text-center bg-white rounded-xl shadow-lg hover:shadow-xl p-6 max-h-[200px]">
                <img
                  src={SuccessIcons}
                  alt="Guarantees Icon"
                  class="mx-auto h-12 mb-4"
                />
                <p class="text-3xl font-bold">
                  <CountUp to={100} from={0} delay={0.5} duration={0.5} className="count-up" />
                  <span class="text-black-600">%</span>
                </p>
                <p class="text-black">Success Guarantees</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio1;
