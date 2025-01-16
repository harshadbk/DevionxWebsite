import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./blogcards.css";

const BlogCards = () => {
  // Slider settings
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,  // Display 3 cards at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div id="root">
      <section id="Blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights &amp; News</h2>
            <p className="text-lg text-gray-600">Stay updated with the latest trends in technology and development</p>
          </div>

          {/* Slider for Blog Cards */}
          <Slider {...settings}>
            {/* Blog Card 1 */}
            <div className="blog-card">
              <div className="h-48 bg-indigo-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">January 15, 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Future of AI in Software Development</h3>
                <p className="text-gray-600 mb-4">Exploring how artificial intelligence is revolutionizing the software development lifecycle and improving code quality.</p>
                <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="blog-card">
              <div className="h-48 bg-indigo-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">January 10, 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Web Development Trends 2024</h3>
                <p className="text-gray-600 mb-4">Discover the latest frameworks, tools, and methodologies shaping the future of web development.</p>
                <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="blog-card">
              <div className="h-48 bg-indigo-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">January 5, 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Machine Learning in Mobile Apps</h3>
                <p className="text-gray-600 mb-4">How machine learning is transforming mobile application development and user experience.</p>
                <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </Slider>

          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <a href="#" className="neon-button">
              View All Posts
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCards;
