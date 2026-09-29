import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeProfitCylinderProps {
  partnerShare: number; // e.g., 18
  className?: string;
}

export default function ThreeProfitCylinder({ partnerShare, className = 'w-full h-48' }: ThreeProfitCylinderProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const partnerMeshRef = useRef<THREE.Mesh | null>(null);
  const teamMeshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 180;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 14, 28);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    meshGroupRef.current = group;

    // Base cylinder total height = 12
    const totalHeight = 11;
    const radius = 6.5;

    // Team portion (82%)
    const teamRatio = (100 - partnerShare) / 100;
    const teamHeight = totalHeight * teamRatio;

    const teamGeo = new THREE.CylinderGeometry(radius, radius, teamHeight, 32);
    const teamMat = new THREE.MeshPhongMaterial({
      color: 0x0284c7,
      specular: 0x38bdf8,
      shininess: 90,
      transparent: true,
      opacity: 0.9,
    });
    const teamMesh = new THREE.Mesh(teamGeo, teamMat);
    teamMesh.position.y = -totalHeight / 2 + teamHeight / 2;
    group.add(teamMesh);
    teamMeshRef.current = teamMesh;

    // Partner portion (18%) - glowing cyan gold
    const partnerRatio = partnerShare / 100;
    const partnerHeight = Math.max(0.5, totalHeight * partnerRatio);

    const partnerGeo = new THREE.CylinderGeometry(radius * 1.04, radius * 1.04, partnerHeight, 32);
    const partnerMat = new THREE.MeshPhongMaterial({
      color: 0x00e5ff,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
      specular: 0xffffff,
      shininess: 140,
    });
    const partnerMesh = new THREE.Mesh(partnerGeo, partnerMat);
    partnerMesh.position.y = -totalHeight / 2 + teamHeight + partnerHeight / 2 + 0.3; // Slight gap separation
    group.add(partnerMesh);
    partnerMeshRef.current = partnerMesh;

    // Floating 3D Golden-Cyan Coin on top
    const coinGeo = new THREE.CylinderGeometry(2.5, 2.5, 0.4, 24);
    const coinMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.85,
      roughness: 0.2,
    });
    const coin = new THREE.Mesh(coinGeo, coinMat);
    coin.position.y = totalHeight / 2 + 1.8;
    coin.rotation.x = 0.3;
    group.add(coin);

    // Orbiting particle ring
    const ringGeo = new THREE.TorusGeometry(radius + 2.5, 0.1, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.2;
    group.add(ring);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(15, 25, 20);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x00e5ff, 3, 40);
    pointLight.position.set(0, 10, 10);
    scene.add(pointLight);

    // Initial slight tilt
    group.rotation.x = 0.35;

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      group.rotation.y = time * 0.7;
      coin.rotation.y = time * 1.5;
      coin.position.y = totalHeight / 2 + 1.8 + Math.sin(time * 3) * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update heights when partnerShare changes
  useEffect(() => {
    if (!partnerMeshRef.current || !teamMeshRef.current) return;
    const totalHeight = 11;
    const radius = 6.5;

    const teamRatio = (100 - partnerShare) / 100;
    const teamHeight = totalHeight * teamRatio;
    teamMeshRef.current.geometry.dispose();
    teamMeshRef.current.geometry = new THREE.CylinderGeometry(radius, radius, teamHeight, 32);
    teamMeshRef.current.position.y = -totalHeight / 2 + teamHeight / 2;

    const partnerRatio = partnerShare / 100;
    const partnerHeight = Math.max(0.5, totalHeight * partnerRatio);
    partnerMeshRef.current.geometry.dispose();
    partnerMeshRef.current.geometry = new THREE.CylinderGeometry(radius * 1.04, radius * 1.04, partnerHeight, 32);
    partnerMeshRef.current.position.y = -totalHeight / 2 + teamHeight + partnerHeight / 2 + 0.3;
  }, [partnerShare]);

  return (
    <div className={`relative ${className} select-none`}>
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-slate-900/80 text-[10px] font-mono text-cyan-300 border border-cyan-500/40">
        3D Real-time Cylinder
      </div>
    </div>
  );
}
