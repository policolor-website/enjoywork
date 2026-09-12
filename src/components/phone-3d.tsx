"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { brand } from "@/lib/brand";

export default function Phone3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;
    const width = 160;
    const height = 160;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0.25, 0.7);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(0.5, 1, 0.5);
    scene.add(dir);
    const dir2 = new THREE.DirectionalLight(0xc9a961, 0.4);
    dir2.position.set(-0.5, 0.5, -0.5);
    scene.add(dir2);

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);
    loader.setMeshoptDecoder(MeshoptDecoder);

    let phone: THREE.Group | null = null;

    loader.load(
      "/phone.glb",
      (gltf) => {
        phone = gltf.scene;
        phone.scale.setScalar(0.6);
        phone.position.set(0.05, -0.2, 0);
        phone.rotation.x = -0.4;
        phone.rotation.y = 0.5;
        scene.add(phone);
        setLoaded(true);
      },
      undefined,
      (err) => console.error("Phone GLB load error:", err)
    );

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (phone) {
        phone.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      dracoLoader.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <a
      href={`tel:${brand.phone.replace(/\s/g, "")}`}
      aria-label={`Sună ${brand.phone}`}
      className="fixed bottom-5 right-5 z-50 group"
    >
      <div className="flex flex-col items-center">
        <div
          className={`relative w-40 h-40 transition-all duration-300 group-hover:scale-110 group-active:scale-95 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div ref={mountRef} className="w-40 h-40" />
        </div>
        <span className="text-xs font-semibold text-ink bg-gold/90 px-3 py-1 rounded-full -mt-4 group-hover:bg-gold transition-colors">
          Cere ofertă
        </span>
      </div>
    </a>
  );
}
