import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCrystalStarProps {
  size?: number;
  className?: string;
}

export default function ThreeCrystalStar({ size = 80, className = 'w-20 h-20' }: ThreeCrystalStarProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = size;
    const height = size;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group
    const starGroup = new THREE.Group();
    scene.add(starGroup);

    // Create 8-pointed faceted 3D star geometry
    const starShape = new THREE.Shape();
    const points = 8;
    const outerRadius = 5.8;
    const innerRadius = 2.6;

    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / points - Math.PI / 2;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      if (i === 0) starShape.moveTo(x, y);
      else starShape.lineTo(x, y);
    }
    starShape.closePath();

    const extrudeSettings = {
      depth: 2.2,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 1.1,
      bevelThickness: 1.2,
    };

    const geometry = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
    geometry.center();

    // Crystal Material with specular and shine
    const material = new THREE.MeshPhongMaterial({
      color: 0x00e5ff,
      emissive: 0x0284c7,
      emissiveIntensity: 0.35,
      specular: 0xffffff,
      shininess: 120,
      transparent: true,
      opacity: 0.92,
      flatShading: true,
    });

    const starMesh = new THREE.Mesh(geometry, material);
    starGroup.add(starMesh);

    // Orbiting 3D Ring
    const ringGeo = new THREE.TorusGeometry(8.2, 0.18, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    starGroup.add(ringMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00e5ff, 2.5);
    dirLight1.position.set(10, 15, 20);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 1.8);
    dirLight2.position.set(-10, -10, -10);
    scene.add(dirLight2);

    // Animation
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      starGroup.rotation.y = time * 0.9;
      starGroup.rotation.x = Math.sin(time * 0.7) * 0.25;
      ringMesh.rotation.z = time * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [size]);

  return <div ref={mountRef} className={`${className} inline-block select-none pointer-events-none`} />;
}
