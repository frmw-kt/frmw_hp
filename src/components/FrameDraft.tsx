"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import Image from "next/image";
import styles from "./FrameDraft.module.css";

// 形状確認用の静止ラフ。生成済みGLBではありません。
export default function FrameDraft({ isolated = false }: { isolated?: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); }
    catch { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    element.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 11);
    const group = new THREE.Group();
    scene.add(group);
    const material = new THREE.MeshStandardMaterial({ color: "#333235", metalness: 0.72, roughness: 0.27 });
    const edgeMaterial = new THREE.MeshStandardMaterial({ color: "#ad9770", metalness: 0.65, roughness: 0.32 });
    const shape = new THREE.Shape();
    const rounded = (path: THREE.Path, half: number, radius: number) => {
      path.moveTo(-half + radius, -half); path.lineTo(half - radius, -half);
      path.quadraticCurveTo(half, -half, half, -half + radius); path.lineTo(half, half - radius);
      path.quadraticCurveTo(half, half, half - radius, half); path.lineTo(-half + radius, half);
      path.quadraticCurveTo(-half, half, -half, half - radius); path.lineTo(-half, -half + radius);
      path.quadraticCurveTo(-half, -half, -half + radius, -half);
    };
    rounded(shape, 1.55, 0.3);
    const hole = new THREE.Path(); rounded(hole, 1.22, 0.22); shape.holes.push(hole);
    const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.25, bevelEnabled: true, bevelThickness: 0.055, bevelSize: 0.045, bevelSegments: 3, curveSegments: 16 });
    geometry.center();
    const first = new THREE.Mesh(geometry, [material, edgeMaterial]);
    first.position.set(-0.68, 0.38, 0); first.rotation.set(0.22, -0.4, 0.17);
    const second = new THREE.Mesh(geometry, [material, edgeMaterial]);
    second.position.set(0.72, -0.46, -0.55); second.rotation.set(-0.25, 0.45, -0.28);
    group.add(first, second);
    scene.add(new THREE.HemisphereLight(0xe4dfd3, 0x13151b, 3));
    const key = new THREE.DirectionalLight(0xffe0a2, 5); key.position.set(-3, 5, 4); scene.add(key);
    const rim = new THREE.DirectionalLight(0xd5e1f3, 3); rim.position.set(4, 1, 3); scene.add(rim);
    const render = () => {
      const w = element.clientWidth, h = element.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h); camera.aspect = w / h;
      camera.position.z = isolated ? 10 : w < 700 ? 15 : 10;
      group.position.set(isolated ? 0 : w < 700 ? 0.45 : 0.2, isolated ? 0 : w < 700 ? 1.2 : 0, 0);
      camera.updateProjectionMatrix(); renderer.render(scene, camera); element.dataset.ready = "true";
    };
    const observer = new ResizeObserver(render); observer.observe(element); render();
    return () => { observer.disconnect(); geometry.dispose(); material.dispose(); edgeMaterial.dispose(); renderer.dispose(); renderer.domElement.remove(); };
  }, [isolated]);
  return <div aria-hidden="true" className={`${styles.layer} ${isolated ? styles.isolated : ""}`}><Image src="/hero/frame-draft.svg" alt="" fill priority className={styles.poster} /><div ref={host} className={styles.canvas} />{!isolated && <div className={styles.shade} />}</div>;
}
