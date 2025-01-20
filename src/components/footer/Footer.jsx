import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './footer.css';

const HyperspeedBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000); // Increased far plane for better depth.
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Create stars geometry
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ 
      size: 0.5, 
      vertexColors: true, 
      transparent: true,
    });

    const starVertices = [];
    const starColors = [];
    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      starVertices.push(x, y, z);

      // Random colors for stars
      starColors.push(Math.random(), Math.random(), Math.random());
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Add hyperspeed effect
    const speed = 0.01;
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate stars faster for hyperspeed
      stars.rotation.x += speed;
      stars.rotation.y += speed;

      // Simulate movement by moving camera forward
      camera.position.z -= 0.1;

      // Reset camera when it reaches a certain distance for continuous hyperspeed effect
      if (camera.position.z <= 0) {
        camera.position.z = 5;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="hyperspeed-background" />;
};

const Footer = () => {
  return (
    <div className="footer-container">
      <HyperspeedBackground />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">DevionX Technologies</h3>
            <p className="footer-description">
              Turning visions into reality with innovative tech and expert services.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">Facebook</a>
              <a href="#" className="social-icon">Twitter</a>
              <a href="#" className="social-icon">LinkedIn</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-subtitle">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#">Software Development</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Applications</a></li>
              <li><a href="#">AI & ML Solutions</a></li>
              <li><a href="#">IT Consulting</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Us</h4>
            <ul className="footer-contact">
              <li>📍 123 Tech Street, Innovation City</li>
              <li>✉️ info@devionx.com</li>
              <li>📞 9370613157 and 7666675306</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 DevionX Technologies. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
