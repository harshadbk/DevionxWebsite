import React, { useState } from 'react';

const FreeQuote = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: [],
    budget: '',
    timeline: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value)
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div id="root">
      <section id="Quote" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get a Free Quote
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tell us about your project requirements and let's start building your digital solution together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Personal Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        className="w-full px-4 py-3 rounded-lg border"
                        required
                      />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 rounded-lg border"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        className="w-full px-4 py-3 rounded-lg border"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        className="w-full px-4 py-3 rounded-lg border"
                        required
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Services Required</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {['Web Development', 'Mobile App Development', 'AI & ML Solutions', 'Cloud Services', 'UI/UX Design', 'IT Consulting'].map((service) => (
                        <label key={service} className="flex items-center p-4 border rounded-lg">
                          <input
                            type="checkbox"
                            value={service}
                            checked={formData.services.includes(service)}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <span className="ml-3">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Project Budget</h3>
                    {['$5,000 - $10,000', '$10,000 - $25,000', '$25,000+'].map((budget) => (
                      <label key={budget} className="flex items-center p-4 border rounded-lg">
                        <input
                          type="radio"
                          name="budget"
                          value={budget}
                          checked={formData.budget === budget}
                          onChange={handleChange}
                          className="form-radio"
                        />
                        <span className="ml-3">{budget}</span>
                      </label>
                    ))}
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Project Timeline</h3>
                    {['1-3 Months', '3-6 Months', '6+ Months'].map((timeline) => (
                      <label key={timeline} className="flex items-center p-4 border rounded-lg">
                        <input
                          type="radio"
                          name="timeline"
                          value={timeline}
                          checked={formData.timeline === timeline}
                          onChange={handleChange}
                          className="form-radio"
                        />
                        <span className="ml-3">{timeline}</span>
                      </label>
                    ))}
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Project Description</h3>
                    <textarea
                      name="description"
                      rows="6"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe your project requirements..."
                      className="w-full px-4 py-3 rounded-lg border"
                    ></textarea>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  {step > 1 && (
                    <button type="button" onClick={prevStep} className="px-6 py-2 bg-gray-300 rounded-lg">
                      Previous
                    </button>
                  )}
                  {step < 5 ? (
                    <button type="button" onClick={nextStep} className="px-6 py-2 bg-blue-600 text-white rounded-lg">
                      Next
                    </button>
                  ) : (
                    <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg">
                      Get Your Free Quote
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeQuote;
