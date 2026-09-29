import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHoloGlobeProps {
  className?: string;
}

export default function ThreeHoloGlobe({ className = 'w-full h-64' }: ThreeHoloGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 280;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 220;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Globe group for rotation
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Base Sphere (Outer Atmosphere Wireframe)
    const sphereRadius = 65;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(sphereMesh);

    // Inner glowing sphere core
    const innerGeo = new THREE.SphereGeometry(sphereRadius * 0.98, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x0369a1,
      transparent: true,
      opacity: 0.08,
    });
    globeGroup.add(new THREE.Mesh(innerGeo, innerMat));

    // Particle Dots for Globe Surface
    const dotCount = 900;
    const dotGeo = new THREE.BufferGeometry();
    const dotPositions = new Float32Array(dotCount * 3);
    const dotColors = new Float32Array(dotCount * 3);

    for (let i = 0; i < dotCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotCount);
      const theta = Math.sqrt(dotCount * Math.PI) * phi;

      const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
      const z = sphereRadius * Math.cos(phi);

      dotPositions[i * 3] = x;
      dotPositions[i * 3 + 1] = y;
      dotPositions[i * 3 + 2] = z;

      // Color variation between cyan and azure
      const isBright = Math.random() > 0.8;
      dotColors[i * 3] = isBright ? 0.0 : 0.04;
      dotColors[i * 3 + 1] = isBright ? 0.9 : 0.52;
      dotColors[i * 3 + 2] = isBright ? 1.0 : 0.78;
    }

    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));
    dotGeo.setAttribute('color', new THREE.BufferAttribute(dotColors, 3));

    const dotMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const dotsMesh = new THREE.Points(dotGeo, dotMat);
    globeGroup.add(dotsMesh);

    // Manila Node (lat 14.6° N, lon 121° E converted to sphere coords)
    const latManila = (14.6 * Math.PI) / 180;
    const lonManila = (121.0 * Math.PI) / 180;
    const mx = sphereRadius * Math.cos(latManila) * Math.sin(lonManila);
    const my = sphereRadius * Math.sin(latManila);
    const mz = sphereRadius * Math.cos(latManila) * Math.cos(lonManila);

    const manilaGeo = new THREE.SphereGeometry(3.5, 16, 16);
    const manilaMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
    const manilaMarker = new THREE.Mesh(manilaGeo, manilaMat);
    manilaMarker.position.set(mx, my, mz);
    globeGroup.add(manilaMarker);

    // Pulsing halo around Manila
    const haloGeo = new THREE.RingGeometry(4, 7, 24);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.position.set(mx * 1.02, my * 1.02, mz * 1.02);
    haloMesh.lookAt(mx * 2, my * 2, mz * 2);
    globeGroup.add(haloMesh);

    // Arc Curves from Manila to Global Hubs (US West, Europe, East Asia)
    const hubs = [
      { name: 'San Francisco', lat: (37.7 * Math.PI) / 180, lon: (-122.4 * Math.PI) / 180 },
      { name: 'London', lat: (51.5 * Math.PI) / 180, lon: (0.1 * Math.PI) / 180 },
      { name: 'Singapore', lat: (1.3 * Math.PI) / 180, lon: (103.8 * Math.PI) / 180 },
      { name: 'Tokyo', lat: (35.6 * Math.PI) / 180, lon: (139.6 * Math.PI) / 180 },
    ];

    hubs.forEach((hub) => {
      const hx = sphereRadius * Math.cos(hub.lat) * Math.sin(hub.lon);
      const hy = sphereRadius * Math.sin(hub.lat);
      const hz = sphereRadius * Math.cos(hub.lat) * Math.cos(hub.lon);

      // Hub node marker
      const hubGeo = new THREE.SphereGeometry(2, 12, 12);
      const hubMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const hubMesh = new THREE.Mesh(hubGeo, hubMat);
      hubMesh.position.set(hx, hy, hz);
      globeGroup.add(hubMesh);

      // 3D Quadratic Arc between Manila and Hub
      const p1 = new THREE.Vector3(mx, my, mz);
      const p2 = new THREE.Vector3(hx, hy, hz);
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const distance = p1.distanceTo(p2);
      // Elevate midpoint above the sphere
      mid.setLength(sphereRadius + distance * 0.28);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const points = curve.getPoints(32);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.65,
      });
      const arcLine = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(arcLine);
    });

    // Orbital Gyro Ring around the globe
    const ringGeo = new THREE.RingGeometry(sphereRadius + 14, sphereRadius + 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.8;
    globeGroup.add(ringMesh);

    // Initial orientation so Manila is visible
    globeGroup.rotation.y = -Math.PI / 3;
    globeGroup.rotation.x = 0.2;

    // Mouse Interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let autoRotateSpeed = 0.003;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      globeGroup.rotation.y += deltaX * 0.008;
      globeGroup.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!isDragging) {
        globeGroup.rotation.y += autoRotateSpeed;
      }

      // Pulse halo
      const scale = 1 + 0.25 * Math.sin(elapsedTime * 4);
      haloMesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative ${className} select-none cursor-grab active:cursor-grabbing`}>
      <div ref={mountRef} className="w-full h-full" />
      {/* 3D Drag Tip Badge */}
      <div className="absolute bottom-2 left-3 px-2 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-[10px] font-mono text-cyan-300 border border-cyan-500/30 flex items-center gap-1 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>Interactive 3D Globe · Drag to Rotate</span>
      </div>
    </div>
  );
}
