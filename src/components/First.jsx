import React from 'react';
import CountUp from '../components/countup';
import './first.css';

const First = () => {
  return (
    <div>
      <div id="root">
        <section id="About" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About DevionX
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Transforming ideas into innovative digital solutions with cutting-edge technology and expertise.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Founded with a vision to revolutionize the digital landscape, DevionX Technologies has emerged as
                    a leading force in software development and technological innovation. Our journey began with a
                    commitment to delivering exceptional value through cutting-edge solutions.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses with innovative digital solutions that drive growth, efficiency, and success
                    in the modern technological landscape. We strive to be at the forefront of technological
                    advancement, particularly in AI and ML applications.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center transform hover:scale-105">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      <CountUp to={200} from={0} delay={0.5} duration={0.5} className="count-up" />+
                    </div>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center transform hover:scale-105">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      <CountUp to={50} from={0} delay={0.5} duration={0.5} className="count-up" />+
                    </div>
                    <p className="text-gray-600">Expert Team Members</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
                  <div className="space-y-6">
                    {/* Expert Team */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-grow">
                        <h4 className="font-bold mb-2">Expert Team</h4>
                        <p className="text-gray-600">Highly skilled professionals with extensive industry experience</p>
                      </div>
                      <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    {/* Innovation First */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-grow">
                        <h4 className="font-bold mb-2">Innovation First</h4>
                        <p className="text-gray-600">Cutting-edge solutions using the latest technologies</p>
                      </div>
                      <div className="bg-purple-100 rounded-lg p-3 flex-shrink-0">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    {/* Timely Delivery */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-grow">
                        <h4 className="font-bold mb-2">Timely Delivery</h4>
                        <p className="text-gray-600">Commitment to meeting deadlines without compromising quality</p>
                      </div>
                      <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="leading-relaxed">
                    To be the global leader in delivering innovative technological solutions that shape the future of
                    digital transformation and empower businesses worldwide.
                  </p>
                  <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors transform hover:scale-105">
                    Join Our Team
                  </button>
                </div>
              </div>
            </div>

            <div className="core-values-container">
              <h3 className="core-values-title">Our Core Values</h3>
              <div className="core-values-grid">
                <div className="core-value-card">
                  <div className="core-value-icon-container">
                    <svg className="core-value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h4 className="core-value-title">Integrity</h4>
                  <p className="core-value-description">Maintaining highest ethical standards in all our dealings</p>
                </div>

                <div className="core-value-card purple">
                  <div className="core-value-icon-container purple">
                    <svg className="core-value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h4 className="core-value-title">Innovation</h4>
                  <p className="core-value-description">Continuously pushing boundaries with creative solutions</p>
                </div>

                <div className="core-value-card green">
                  <div className="core-value-icon-container green">
                    <svg className="core-value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857"></path>
                    </svg>
                  </div>
                  <h4 className="core-value-title">Collaboration</h4>
                  <p className="core-value-description">Working together to achieve excellence through teamwork</p>
                </div>

                <div className="core-value-card yellow">
                  <div className="core-value-icon-container yellow">
                    <svg className="core-value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                  </div>
                  <h4 className="core-value-title">Excellence</h4>
                  <p className="core-value-description">Striving for perfection in everything we do</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default First;
