import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "./Services.css";

const Button = ({ children, className = "", ...props }) => (
  <button className={`button ${className}`} {...props}>
    {children}
  </button>
);

const services = [
  {
    title: "Web Development",
    description: "Build scalable and efficient web applications.",
    features: ["Responsive Design", "SEO Optimization", "Modern Tech Stack"],
    color: "#E3F2FD",
    icon: "🌐",
  },
  {
    title: "Mobile Development",
    description: "Create robust and user-friendly mobile applications.",
    features: ["Cross-platform", "High Performance", "Custom Features"],
    color: "#FFEBEE",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Design visually appealing and user-centric interfaces.",
    features: ["Wireframing", "Prototyping", "Usability Testing"],
    color: "#E8F5E9",
    icon: "🎨",
  },
];

const Services = () => {
  return (
    <div className="services">
      <h1 className="title">Our Services</h1>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        className="swiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div>
              <h2>
                {service.icon} {service.title}
              </h2>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Button>Learn More</Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
