"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./FrameDraft.module.css";

export default function HomeHero3D() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = host.current;
    const hero = element?.closest('section');
    if (!element || !hero) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let disposed = false;
    let cleanup: (() => void) | undefined;
    const start = async () => {
      hero.dataset.threeState='loading';
      if (motion.matches) { hero.dataset.threeState='reduced-motion'; return; }
      const [THREE, { GLTFLoader }, { RoomEnvironment }] = await Promise.all([
        import('three'), import('three/examples/jsm/loaders/GLTFLoader.js'), import('three/examples/jsm/environments/RoomEnvironment.js'),
      ]);
      if (disposed || motion.matches) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); } catch { hero.dataset.threeState='webgl-unavailable'; return; }
      renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 700 ? 1 : 1.5));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      element.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, .1, 100);
      const group = new THREE.Group(); scene.add(group);
      const room = new RoomEnvironment();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const environment = pmrem.fromScene(room, .04);
      scene.environment = environment.texture;
      room.dispose(); pmrem.dispose();
      const material = new THREE.MeshStandardMaterial({color:'#302d28',metalness:.85,roughness:.48,envMapIntensity:1.2});
      const light = new THREE.DirectionalLight('#ffe0a2',4); light.position.set(-3,5,4); scene.add(light);
      scene.add(new THREE.HemisphereLight('#dbe2ef','#101218',2));
      let frame = 0, visible = true, loaded = false;
      let previousTime: number | undefined;
      let autoRotation = 0;
      const rotationSpeed = Math.PI * 2 / 40; // 40秒で1回転
      let model: InstanceType<typeof THREE.Group> | undefined;
      const disposeModel = (root: InstanceType<typeof THREE.Group>) => root.traverse(obj => {
        if (obj instanceof THREE.Mesh) obj.geometry.dispose();
      });
      const draw = (time: number) => {
        frame = 0;
        if (disposed || !visible || !loaded || document.hidden || motion.matches) { previousTime = undefined; return; }
        const elapsed = previousTime === undefined ? 0 : Math.min((time - previousTime) / 1000, .1);
        previousTime = time;
        autoRotation = (autoRotation + elapsed * rotationSpeed) % (Math.PI * 2);
        const rect = hero.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
        const mobile = element.clientWidth < 700;
        group.rotation.y = Math.PI / 2 + autoRotation + progress * Math.PI * 40 / 180;
        group.position.y = progress * (mobile ? .3 : .6);
        element.style.opacity = String(.65*(1-progress));
        renderer.render(scene,camera);
        element.dataset.ready = 'true';
        hero.dataset.threeProgress = progress.toFixed(3);
        frame = requestAnimationFrame(draw);
      };
      const schedule = () => { if (!frame && visible && !document.hidden && !motion.matches && loaded) frame=requestAnimationFrame(draw); };
      const pause = () => { cancelAnimationFrame(frame); frame=0; previousTime=undefined; };
      const visibilityChange = () => { if (document.hidden) pause(); else schedule(); };
      const resize = () => {
        const w=element.clientWidth,h=element.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w,h); camera.aspect=w/h;
        camera.position.z = Math.max(9, 6 / camera.aspect);
        camera.updateProjectionMatrix(); schedule();
      };
      const lost = (event: Event) => { event.preventDefault(); delete element.dataset.ready; loaded=false; pause(); };
      renderer.domElement.addEventListener('webglcontextlost',lost);
      const observer = new IntersectionObserver(entries => { visible=entries[0].isIntersecting; if(visible) schedule(); else pause(); });
      observer.observe(hero);
      const size = new ResizeObserver(resize); size.observe(element);
      window.addEventListener('scroll',schedule,{passive:true});
      document.addEventListener('visibilitychange',visibilityChange);
      const motionChange = () => { if(motion.matches) {delete element.dataset.ready;pause();} else schedule(); };
      motion.addEventListener('change',motionChange);
      cleanup = () => {
        cancelAnimationFrame(frame); observer.disconnect(); size.disconnect();
        window.removeEventListener('scroll',schedule); document.removeEventListener('visibilitychange',visibilityChange); motion.removeEventListener('change',motionChange);
        renderer.domElement.removeEventListener('webglcontextlost',lost);
        if(model) disposeModel(model); material.dispose(); environment.dispose(); renderer.dispose(); renderer.domElement.remove(); delete element.dataset.ready;
      };
      try {
        const gltf = await new GLTFLoader().loadAsync('/hero/framework-frames.glb');
        if(disposed) { disposeModel(gltf.scene); return; }
        model=gltf.scene;
        model.traverse(obj => { if(obj instanceof THREE.Mesh) {
          const old=Array.isArray(obj.material)?obj.material:[obj.material];
          old.forEach(m=>m.dispose()); obj.material=material;
        }});
        const box=new THREE.Box3().setFromObject(model);
        const center=box.getCenter(new THREE.Vector3()); const dimensions=box.getSize(new THREE.Vector3());
        model.position.sub(center); const scale=3.8/Math.max(dimensions.x,dimensions.y,dimensions.z);
        const normalized=new THREE.Group(); normalized.add(model); normalized.scale.setScalar(scale); group.add(normalized);
        loaded=true; hero.dataset.threeState='loaded'; resize();
      } catch { hero.dataset.threeState='load-error'; delete element.dataset.ready; }
    };
    const run = () => { void start().catch(()=>{ delete element.dataset.ready; }); };
    const initiallyReduced = motion.matches;
    const enableMotion = () => { if (!motion.matches) { motion.removeEventListener('change', enableMotion); run(); } };
    if (initiallyReduced) motion.addEventListener('change', enableMotion);
    run();
    return () => { disposed=true; motion.removeEventListener('change', enableMotion); cleanup?.(); };
  }, []);
  return <div aria-hidden="true" className={styles.layer}><Image src="/hero/frame-draft.svg" alt="" fill priority className={styles.poster}/><div ref={host} className={styles.canvas}/><div className={styles.shade}/></div>;
}
