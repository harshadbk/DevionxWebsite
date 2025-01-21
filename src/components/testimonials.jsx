import React, { useState } from "react";
import './portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectsIcon from "../assets/Projects.png";
import ExpertsIcon from "../assets/ExpertsIcon.png";
import CustomersIcon from "../assets/CustomersIcon.png";
import SuccessIcons from "../assets/SuccessIcon.png";
import CountUp from "../components/countup";

const testimonials = () => {
    return (
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
    )
}

export default testimonials
