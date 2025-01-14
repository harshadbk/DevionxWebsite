import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Hyperspeed = ({ effectOptions }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(effectOptions.colors.background);

    const camera = new THREE.PerspectiveCamera(
      effectOptions.fov,
      width / height,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Road Geometry and Material
    const roadGeometry = new THREE.BoxGeometry(effectOptions.roadWidth, 0.1, effectOptions.length);
    const roadMaterial = new THREE.MeshBasicMaterial({ color: effectOptions.colors.roadColor });
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    scene.add(road);

    // Create Car Lights (Optional visual enhancement)
    const carLightGeometry = new THREE.SphereGeometry(0.05, 32, 32);
    const carLightMaterial = new THREE.MeshBasicMaterial({ color: effectOptions.colors.sticks });
    const carLight = new THREE.Mesh(carLightGeometry, carLightMaterial);
    carLight.position.set(0, 0, -10);
    scene.add(carLight);

    // Animate the scene
    const animate = () => {
      requestAnimationFrame(animate);

      // Move the road and car lights forward (speed effect)
      road.position.z += effectOptions.speedUp;
      carLight.position.z += effectOptions.speedUp;

      // Loop the road animation
      if (road.position.z > effectOptions.length / 2) {
        road.position.z = -effectOptions.length / 2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [effectOptions]);

  return <div ref={mountRef} style={{ width: '100%', height: '400px', position: 'absolute', top: 0, left: 0 }} />;
};

export default Hyperspeed;
