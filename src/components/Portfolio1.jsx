import React, { useState } from "react";

const Portfolio1 = () => {
  // State to track the selected category
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

  // Portfolio items categorized
  const projects = [
    {
      id: 1,
      title: "Online Retail Solution",
      category: "Web Development",
      description:
        "Complete e-commerce platform with inventory management and payment integration.",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "bg-gradient-to-br from-blue-500 to-purple-500", // Unique gradient
    },
    {
      id: 2,
      title: "Medical Management System",
      category: "Mobile Apps",
      description:
        "Telemedicine platform with patient management and appointment scheduling.",
      tech: ["Flutter", "Firebase", "ML Kit"],
      gradient: "bg-gradient-to-br from-green-500 to-blue-500", // Unique gradient
    },
    {
      id: 3,
      title: "Business Intelligence Platform",
      category: "AI Solutions",
      description:
        "AI-powered analytics dashboard for real-time business insights.",
      tech: ["Python", "TensorFlow", "Vue.js"],
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500", // Unique gradient
    },
    {
      id: 4,
      title: "E-Learning System",
      category: "Web Development",
      description:
        "Comprehensive learning management system with video conferencing.",
      tech: ["Angular", "Django", "WebRTC"],
      gradient: "bg-gradient-to-br from-yellow-500 to-red-500", // Unique gradient
    },
    {
      id: 5,
      title: "Banking Application",
      category: "Fintech Solution",
      description:
        "Secure mobile banking application with real-time transactions.",
      tech: ["React Native", "Spring Boot", "PostgreSQL"],
      gradient: "bg-gradient-to-br from-indigo-500 to-blue-500", // Unique gradient
    },
    {
      id: 6,
      title: "Smart Home Control",
      category: "AI Solutions",
      description: "IoT-based smart home monitoring and control system.",
      tech: ["IoT", "MQTT", "Next.js"],
      gradient: "bg-gradient-to-br from-pink-500 to-purple-500", // Unique gradient
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const visibleFilteredProjects = filteredProjects.slice(0, visibleProjects);
  return (
    <>
      <div>
        <section id="Portfolio" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Portfolio
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our successful projects and innovative solutions that
                have helped businesses transform digitally.
              </p>
            </div>

            {/* Portfolio Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                "All",
                "Web Development",
                "Mobile Apps",
                "AI Solutions",
                "Cloud Services",
              ].map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleFilteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  {/* Use the project's gradient */}
                  <div className={`relative h-64 ${project.gradient}`}>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <span className="text-lg font-semibold">
                        {project.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${
                            techColors[tech] || "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleProjects < filteredProjects.length && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setVisibleProjects(visibleProjects + 3)}
                  className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Load More Projects
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio1;
