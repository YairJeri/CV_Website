import { useEffect, useRef } from 'preact/hooks';
import * as THREE from 'three';

export default function ThreeBackground() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 15;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        const geometries = [
            new THREE.SphereGeometry(0.3, 16, 16),
            new THREE.IcosahedronGeometry(0.35, 0),
            new THREE.TorusGeometry(0.2, 0.08, 8, 16),
        ];

        const colors = [0x6366f1, 0x818cf8, 0x4f46e5];

        const objects = [];
        const total = 30;

        for (let i = 0; i < total; i++) {
            const geom = geometries[Math.floor(Math.random() * geometries.length)];
            const mat = new THREE.MeshBasicMaterial({
                color: colors[Math.floor(Math.random() * colors.length)],
                wireframe: true,
                transparent: true,
                opacity: 0.15,
            });
            const mesh = new THREE.Mesh(geom, mat);
            mesh.position.set(
                Math.random() * 20 - 10,
                Math.random() * 10 - 5,
                Math.random() * 20 - 10
            );
            mesh.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );
            mesh.scale.setScalar(Math.random() * 0.7 + 0.3);
            objects.push(mesh);
            scene.add(mesh);
        }

        let animationId;

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            objects.forEach((obj, i) => {
                obj.rotation.x += 0.0008 * (i + 1);
                obj.rotation.y += 0.0012 * (i + 1);
                obj.position.y += Math.sin(Date.now() * 0.0005 + i) * 0.002;
                obj.position.x += Math.cos(Date.now() * 0.0003 + i) * 0.002;
            });
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
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            scene.clear();
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} class="fixed inset-0 -z-50 pointer-events-none" />;
}
