'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import SemiCircle from './Shape__SemiCircle';

export default function HomeAnimation() {
    //const mountRef = useRef<any>(null);

    useEffect(() => {

        /*
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, (window.innerWidth/2) / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);
    
        const geo_01_triangle = new THREE.BufferGeometry();
        const vertices = new Float32Array([
        -1.0, -1.0, 0.0, // Vertex 1 (x, y, z)
        1.0, -1.0, 0.0, // Vertex 2
        0.0,  1.0, 0.0  // Vertex 3
        ]);
        geo_01_triangle.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

        // Create a material
        const material = new THREE.MeshBasicMaterial({ color: 0xff6600, side: THREE.DoubleSide });

        // Create a mesh
        const triangleMesh = new THREE.Mesh(geo_01_triangle, material);

        const geo_01_container = new THREE.Object3D();
        geo_01_container.add(triangleMesh);
        geo_01_container.position.set(0, 0.5, 0);
        scene.add(geo_01_container);

        camera.position.z = 1;
    
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
    
        animate();
    
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };*/

      }, []);

      useEffect(() => {
        // Wait until the component is mounted in the browser
        const triangle = document.querySelector(".home-animation__container");
        if (triangle) {
          setTimeout(() => {
            triangle.classList.add("--start-transition");
          }, 100); // Small delay for a smooth effect
        }
      }, []);
      



    /* SEE ../public/HOFFMAN-ANIMATION-GUIDE.png FOR REFERENCE TO NUMBERS */
    return (
        <>
            {/* <div ref={mountRef} /> */}
            <div className="home-animation__container">
                <div className="home-animation__top">
                    <div className="home-animation__top__left">
                        <div className="shape shape-10_triangle"></div>
                    </div>
                    <div className="home-animation__top__right">
                        <div className="shape-01_box"></div>
                        <div className="shape shape-11_box"></div>
                        <SemiCircle customclass={"shape shape-13_semicircle"} />
                        
                    </div>
                </div>
            </div>
            {/*<div className="home-animation">
                <div className="home-animation__item-1"></div>
                <div className="home-animation__item-2"></div>
                <div className="home-animation__item-3"></div>
                <div className="home-animation__item-4"></div>
                <div className="home-animation__item-5"></div>
                <div className="home-animation__item-6"></div>
                <div className="home-animation__item-7"></div>
                <div className="home-animation__item-8"></div>
                <div className="home-animation__item-9"></div>
                <div className="home-animation__item-10"></div>
                <div className="home-animation__item-11"></div>
                <div className="home-animation__item-12"></div>
                <div className="home-animation__item-13"></div>
                <div className="home-animation__item-14"></div>
                <div className="home-animation__item-15"></div>
                <div className="home-animation__item-16"></div>
                <div className="home-animation__item-17"></div>
                <div className="home-animation__item-18"></div>
                <div className="home-animation__item-19"></div>
                <div className="home-animation__item-20"></div>
            </div> */}
        </>
    )
}