import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const GetInTouch = () => {
  const [touch, setTouch] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setTouch({ ...touch, [e.target.name]: e.target.value });
  };

  const handleAddTouch = async (e) => {
    e.preventDefault();
    console.log(touch);
    try {
      const response = await fetch('http://127.0.0.1:5000/addtouch', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(touch),
      });
      const data = await response.json();
      await emailjs.send('service_37krz59', 'template_6d0xamp', touch, 'rjLdKMEoEpqhYRpVw');
      if (data.success) {
        alert('Message sent successfully');
        setTouch({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Message sending failed');
      }
        
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message');
    }
  };

  return (
    <div id="root">
      <section id="Contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Contact us today for a free consultation about your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl w-full mx-auto">
              <h3 className="text-3xl font-bold text-center text-blue-600 mb-10">
                Send us a Message
              </h3>
              <form className="space-y-10" onSubmit={handleAddTouch}>
                <div className="flex items-center space-x-6 mb-8">
                  <label className="text-gray-700 font-medium w-1/4" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={touch.name}
                    onChange={handleChange}
                    className="w-3/4 px-6 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ease-in-out"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="flex items-center space-x-6 mb-8">
                  <label className="text-gray-700 font-medium w-1/4" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={touch.email}
                    onChange={handleChange}
                    className="w-3/4 px-6 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ease-in-out"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="flex items-center space-x-6 mb-8">
                  <label className="text-gray-700 font-medium w-1/4" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={touch.phone}
                    onChange={handleChange}
                    className="w-3/4 px-6 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ease-in-out"
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>

                <div className="flex items-center space-x-6 mb-8">
                  <label className="text-gray-700 font-medium w-1/4" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={touch.subject}
                    onChange={handleChange}
                    className="w-3/4 px-6 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ease-in-out"
                    placeholder="Project Discussion"
                    required
                  />
                </div>

                <div className="flex items-center space-x-6 mb-8">
                  <label className="text-gray-700 font-medium w-1/4" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={touch.message}
                    onChange={handleChange}
                    className="w-3/4 px-6 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ease-in-out"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="text-center w-full">
                      <h4 className="font-bold mb-1">Office Location</h4>
                      <p className="text-gray-600">
                        123 Innovation Street, Tech Hub, Silicon Valley, CA 94025
                      </p>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-3">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center justify-between space-x-4">
                    <div className="text-center w-full">
                      <h4 className="font-bold mb-1">Email Us</h4>
                      <p className="text-gray-600">
                        info@devionx.com support@devionx.com
                      </p>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-3">
                      <svg
                        className="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center justify-between space-x-4">
                    <div className="text-center w-full">
                      <h4 className="font-bold mb-1">Call Us</h4>
                      <p className="text-gray-600">
                        9370613157 and 7666675306
                      </p>
                    </div>
                    <div className="bg-green-100 rounded-lg p-3">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Social Media --> */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Connect With Us</h3>
                <div className="flex space-x-4 justify-center items-center">
                  <a
                    href="#"
                    className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors flex justify-center items-center"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.026 1.797-4.719 4.557-4.719 1.327 0 2.681.25 2.681.25v2.987h-1.509c-1.484 0-2.048 1.022-2.048 2.075v2.465h3.49l-.557 3.47h-2.934v8.385c5.738-.9 10.125-5.864 10.125-11.854z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors flex justify-center items-center"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.75c-3.75 0-6.75-3-6.75-6.75s3-6.75 6.75-6.75 6.75 3 6.75 6.75-3 6.75-6.75 6.75zm-.75-9h1.5v4.5h-1.5zm0 6h1.5v1.5h-1.5z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors flex justify-center items-center"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M21.168 0H2.832C1.267 0 0 1.268 0 2.834v18.332c0 1.565 1.268 2.834 2.834 2.834h18.334c1.565 0 2.834-1.268 2.834-2.834V2.834C24 1.268 22.732 0 21.168 0zm-3.767 6.541c-.336 0-.642.131-.876.377-.234.245-.373.58-.373.925v10.76c0 .347.138.679.373.925.234.246.54.377.876.377.335 0 .642-.131.876-.377.234-.245.373-.58.373-.925V7.843c0-.347-.138-.679-.373-.925-.234-.246-.541-.377-.876-.377zM9.406 7.843c.335 0 .642.131.876.377.234.245.373.58.373.925v10.76c0 .347-.139.679-.373.925-.234.246-.541.377-.876.377-.335 0-.642-.131-.876-.377-.234-.245-.373-.58-.373-.925V7.843c0-.347.139-.679.373-.925.234-.246.541-.377.876-.377zM6.12 11.375c-.335 0-.642.131-.876.377-.234.245-.373.58-.373.925v6.368c0 .347.138.679.373.925.234.246.541.377.876.377s.642-.131.876-.377c.234-.245.373-.58.373-.925v-6.368c0-.347-.138-.679-.373-.925-.234-.246-.541-.377-.876-.377z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
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
    </div>
  );
};

export default GetInTouch;