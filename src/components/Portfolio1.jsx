import React, { useState } from "react";

const Portfolio1 = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

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
              {filteredProjects.map((project) => (
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
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
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
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Load More Projects
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Client testimonials */}
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
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div class="flex justify-between items-start mb-6">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span class="text-blue-600 font-bold text-xl">JD</span>
                  </div>
                  <div>
                    <h4 class="font-bold">John Doe</h4>
                    <p class="text-gray-600 text-sm">CEO, Tech Solutions Inc</p>
                  </div>
                </div>
                <div class="text-yellow-400">
                  <div class="flex space-x-1">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 leading-relaxed">
                "DevionX Technologies delivered an exceptional e-commerce
                platform that exceeded our expectations. Their expertise in both
                frontend and backend development is remarkable."
              </p>
            </div>

            {/* <!-- Testimonial 2 --> */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div class="flex justify-between items-start mb-6">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span class="text-purple-600 font-bold text-xl">SJ</span>
                  </div>
                  <div>
                    <h4 class="font-bold">Sarah Johnson</h4>
                    <p class="text-gray-600 text-sm">CTO, Healthcare Plus</p>
                  </div>
                </div>
                <div class="text-yellow-400">
                  <div class="flex space-x-1">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 leading-relaxed">
                "The AI-powered analytics solution provided by DevionX has
                transformed our decision-making process. Their team's technical
                expertise is outstanding."
              </p>
            </div>

            {/* <!-- Testimonial 3 --> */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div class="flex justify-between items-start mb-6">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span class="text-green-600 font-bold text-xl">MP</span>
                  </div>
                  <div>
                    <h4 class="font-bold">Mike Peterson</h4>
                    <p class="text-gray-600 text-sm">Founder, EduTech</p>
                  </div>
                </div>
                <div class="text-yellow-400">
                  <div class="flex space-x-1">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 leading-relaxed">
                "Working with DevionX on our educational platform was a
                game-changer. Their innovative approach and dedication to
                quality is unmatched."
              </p>
            </div>
          </div>

          {/* <!-- Client Logos --> */}
          <div class="mt-20">
            <h3 class="text-center text-xl font-bold mb-12">
              Trusted by Leading Companies
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              <div class="h-12 bg-gray-200 rounded"></div>
              <div class="h-12 bg-gray-200 rounded"></div>
              <div class="h-12 bg-gray-200 rounded"></div>
              <div class="h-12 bg-gray-200 rounded"></div>
              <div class="h-12 bg-gray-200 rounded"></div>
              <div class="h-12 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      <div id="root">
        <section
          id="Contact"
          class="py-20 bg-gradient-to-b from-blue-50 to-white"
        >
          <div class="container mx-auto px-4">
            {/* <!-- Section Header --> */}
            <div class="text-center mb-16">
              <h2 class="text-4xl font-bold mb-4">
                <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto">
                Ready to transform your ideas into reality? Contact us today for
                a free consultation about your project.
              </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-16">
              {/* <!-- Contact Form --> */}
              <div class="bg-white rounded-2xl shadow-xl p-8">
                <h3 class="text-2xl font-bold mb-6">Send us a Message</h3>
                <form class="space-y-6">
                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-gray-700 mb-2" for="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="John Doe"
                      ></input>
                    </div>
                    <div>
                      <label class="block text-gray-700 mb-2" for="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="john@example.com"
                      ></input>
                    </div>
                  </div>

                  <div>
                    <label class="block text-gray-700 mb-2" for="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    ></input>
                  </div>

                  <div>
                    <label class="block text-gray-700 mb-2" for="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Project Discussion"
                    ></input>
                  </div>

                  <div>
                    <label class="block text-gray-700 mb-2" for="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* <!-- Contact Information --> */}
              <div class="space-y-8">
                <div class="bg-white rounded-2xl shadow-xl p-8">
                  <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
                  <div class="space-y-6">
                    <div class="flex items-start space-x-4">
                      <div class="bg-blue-100 rounded-lg p-3">
                        <svg
                          class="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-bold mb-1">Office Location</h4>
                        <p class="text-gray-600">
                          123 Innovation Street, Tech Hub,<br></br>Silicon
                          Valley, CA 94025
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4">
                      <div class="bg-purple-100 rounded-lg p-3">
                        <svg
                          class="w-6 h-6 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-bold mb-1">Email Us</h4>
                        <p class="text-gray-600">
                          info@devionx.com<br></br>support@devionx.com
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4">
                      <div class="bg-green-100 rounded-lg p-3">
                        <svg
                          class="w-6 h-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-bold mb-1">Call Us</h4>
                        <p class="text-gray-600">
                          +1 (555) 123-4567<br></br>+1 (555) 987-6543
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Social Media --> */}
                <div class="bg-white rounded-2xl shadow-xl p-8">
                  <h3 class="text-2xl font-bold mb-6">Connect With Us</h3>
                  <div class="flex space-x-4">
                    <a
                      href="#"
                      class="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <svg
                        class="w-6 h-6 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      class="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <svg
                        class="w-6 h-6 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      class="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <svg
                        class="w-6 h-6 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      class="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <svg
                        class="w-6 h-6 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* <!-- Business Hours --> */}
                <div class="bg-white rounded-2xl shadow-xl p-8">
                  <h3 class="text-2xl font-bold mb-6">Business Hours</h3>
                  <div class="space-y-3">
                    <div class="flex justify-between">
                      <span class="text-gray-600">Monday - Friday</span>
                      <span class="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">Saturday</span>
                      <span class="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">Sunday</span>
                      <span class="font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="root">
          <section
            id="Quote"
            class="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
          >
            <div class="container mx-auto px-4">
              {/* <!-- Section Header --> */}
              <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4">
                  <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Get a Free Quote
                  </span>
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                  Tell us about your project requirements and let's start
                  building your digital solution together.
                </p>
              </div>

              <div class="max-w-4xl mx-auto">
                <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <form class="space-y-8">
                    {/* <!-- Project Details --> */}
                    <div class="space-y-6">
                      <h3 class="text-2xl font-bold">Project Details</h3>

                      <div class="grid md:grid-cols-2 gap-6">
                        <div>
                          <label class="block text-gray-700 mb-2" for="name">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                            placeholder="John Doe"
                            required=""
                          ></input>
                        </div>
                        <div>
                          <label class="block text-gray-700 mb-2" for="company">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                            placeholder="Your Company"
                          ></input>
                        </div>
                      </div>

                      <div class="grid md:grid-cols-2 gap-6">
                        <div>
                          <label class="block text-gray-700 mb-2" for="email">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                            placeholder="john@example.com"
                            required=""
                          ></input>
                        </div>
                        <div>
                          <label class="block text-gray-700 mb-2" for="phone">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                            placeholder="+1 (555) 000-0000"
                            required=""
                          ></input>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Service Selection --> */}
                    <div class="space-y-6">
                      <h3 class="text-2xl font-bold">Services Required</h3>

                      <div class="grid md:grid-cols-2 gap-4">
                        <label class="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            class="form-checkbox text-blue-600 rounded"
                          ></input>
                          <span class="ml-3">Web Development</span>
                        </label>
                        <label class="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            class="form-checkbox text-blue-600 rounded"
                          ></input>
                          <span class="ml-3">Mobile App Development</span>
                        </label>
                        <label class="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            class="form-checkbox text-blue-600 rounded"
                          ></input>
                          <span class="ml-3">AI &amp; ML Solutions</span>
                        </label>
                        <label class="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            class="form-checkbox text-blue-600 rounded"
                          ></input>
                          <span class="ml-3">Cloud Services</span>
                        </label>
                        <label class="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            class="form-checkbox text-blue-600 rounded"
                          ></input>
                          <span class="ml-3">UI/UX Design</span>
                        </label>
                        <label class="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            class="form-checkbox text-blue-600 rounded"
                          ></input>
                          <span class="ml-3">IT Consulting</span>
                        </label>
                      </div>
                    </div>

                    {/* <!-- Project Budget --> */}
                    <div class="space-y-6">
                      <h3 class="text-2xl font-bold">Project Budget</h3>

                      <div class="grid md:grid-cols-3 gap-4">
                        <label class="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="budget"
                            class="form-radio text-blue-600"
                          ></input>
                          <span class="ml-3">$5,000 - $10,000</span>
                        </label>
                        <label class="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="budget"
                            class="form-radio text-blue-600"
                          ></input>
                          <span class="ml-3">$10,000 - $25,000</span>
                        </label>
                        <label class="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="budget"
                            class="form-radio text-blue-600"
                          ></input>
                          <span class="ml-3">$25,000+</span>
                        </label>
                      </div>
                    </div>

                    {/* <!-- Project Timeline --> */}
                    <div class="space-y-6">
                      <h3 class="text-2xl font-bold">Project Timeline</h3>

                      <div class="grid md:grid-cols-3 gap-4">
                        <label class="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="timeline"
                            class="form-radio text-blue-600"
                          ></input>
                          <span class="ml-3">1-3 Months</span>
                        </label>
                        <label class="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="timeline"
                            class="form-radio text-blue-600"
                          ></input>
                          <span class="ml-3">3-6 Months</span>
                        </label>
                        <label class="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="timeline"
                            class="form-radio text-blue-600"
                          ></input>
                          <span class="ml-3">6+ Months</span>
                        </label>
                      </div>
                    </div>

                    {/* <!-- Project Description --> */}
                    <div class="space-y-6">
                      <h3 class="text-2xl font-bold">Project Description</h3>

                      <div>
                        <textarea
                          rows="6"
                          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                          placeholder="Please describe your project requirements, goals, and any specific features you need..."
                        ></textarea>
                      </div>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <div class="pt-6">
                      <button
                        type="submit"
                        class="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Get Your Free Quote
                      </button>
                      <p class="text-center text-gray-600 mt-4 text-sm">
                        * We'll get back to you within 24 hours with a detailed
                        quote.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio1;
