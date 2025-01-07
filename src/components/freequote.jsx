import React from 'react';

const FreeQuote = () => {
  return (
    <div>
      <div id="root">
        <section
          id="Quote"
          className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
        >
          <div className="container mx-auto px-4">
            {/* <!-- Section Header --> */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Get a Free Quote
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tell us about your project requirements and let's start
                building your digital solution together.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <form className="space-y-8">
                  {/* <!-- Project Details --> */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Project Details</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="name">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="company">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="phone">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                          placeholder="+1 (555) 000-0000"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Service Selection --> */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Services Required</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          className="form-checkbox text-blue-600 rounded"
                        />
                        <span className="ml-3">Web Development</span>
                      </label>
                      <label className="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          className="form-checkbox text-blue-600 rounded"
                        />
                        <span className="ml-3">Mobile App Development</span>
                      </label>
                      <label className="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          className="form-checkbox text-blue-600 rounded"
                        />
                        <span className="ml-3">AI &amp; ML Solutions</span>
                      </label>
                      <label className="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          className="form-checkbox text-blue-600 rounded"
                        />
                        <span className="ml-3">Cloud Services</span>
                      </label>
                      <label className="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          className="form-checkbox text-blue-600 rounded"
                        />
                        <span className="ml-3">UI/UX Design</span>
                      </label>
                      <label className="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          className="form-checkbox text-blue-600 rounded"
                        />
                        <span className="ml-3">IT Consulting</span>
                      </label>
                    </div>
                  </div>

                  {/* <!-- Project Budget --> */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Project Budget</h3>

                    <div className="grid md:grid-cols-3 gap-4">
                      <label className="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="budget"
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-3">$5,000 - $10,000</span>
                      </label>
                      <label className="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="budget"
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-3">$10,000 - $25,000</span>
                      </label>
                      <label className="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="budget"
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-3">$25,000+</span>
                      </label>
                    </div>
                  </div>

                  {/* <!-- Project Timeline --> */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Project Timeline</h3>

                    <div className="grid md:grid-cols-3 gap-4">
                      <label className="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="timeline"
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-3">1-3 Months</span>
                      </label>
                      <label className="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="timeline"
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-3">3-6 Months</span>
                      </label>
                      <label className="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="timeline"
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-3">6+ Months</span>
                      </label>
                    </div>
                  </div>

                  {/* <!-- Project Description --> */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Project Description</h3>

                    <div>
                      <textarea
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="Please describe your project requirements, goals, and any specific features you need..."
                      ></textarea>
                    </div>
                  </div>

                  {/* <!-- Submit Button --> */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Get Your Free Quote
                    </button>
                    <p className="text-center text-gray-600 mt-4 text-sm">
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
  );
};

export default FreeQuote;
