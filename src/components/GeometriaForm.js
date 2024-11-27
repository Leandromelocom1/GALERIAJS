import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

const GeometriaForm = () => {
    const [formData, setFormData] = useState({
        larguraLivre: 3.2,
        alturaLivre: 2.2,
        misula: 20.0,
        mvce: 20.0,
        mhb: 20.0,
        mvb: 20.0,
        espessura: 15.0,
    });

    const mountRef = useRef(null); // Referência para o container 3D
    const sceneRef = useRef(null); // Referência para a cena
    const geometryRef = useRef(null); // Referência para a geometria 3D

    // Inicializa a cena 3D com Three.js
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(500, 300);
        mountRef.current.appendChild(renderer.domElement);

        // Luz na cena
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(10, 10, 10);
        scene.add(light);

        // Geometria inicial (retângulo representando a seção)
        const material = new THREE.MeshStandardMaterial({ color: 0x0077ff, wireframe: false });
        const geometry = new THREE.BoxGeometry(3.2, 2.2, 0.2); // Exemplo inicial
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Atualiza câmera e salva referências
        camera.position.z = 5;
        sceneRef.current = scene;
        geometryRef.current = mesh;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    // Atualiza a geometria 3D sempre que o estado do formulário muda
    useEffect(() => {
        if (geometryRef.current) {
            geometryRef.current.scale.set(
                formData.larguraLivre / 3.2, // Escala proporcional para largura
                formData.alturaLivre / 2.2, // Escala proporcional para altura
                1 // Profundidade fixa
            );
        }
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: parseFloat(value),
        });
    };

    return (
        <div className="geometria-form">
            <h2>Geometria</h2>
            <div style={{ display: 'flex' }}>
                {/* Formulário */}
                <form style={{ marginRight: '20px' }}>
                    <div className="form-group">
                        <label>Largura Livre (b1) (m):</label>
                        <input
                            type="number"
                            name="larguraLivre"
                            value={formData.larguraLivre}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                        />
                    </div>

                    <div className="form-group">
                        <label>Altura Livre (h1) (m):</label>
                        <input
                            type="number"
                            name="alturaLivre"
                            value={formData.alturaLivre}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                        />
                    </div>

                    <div className="form-group">
                        <label>Mísula (m) (cm):</label>
                        <input
                            type="number"
                            name="misula"
                            value={formData.misula}
                            onChange={handleChange}
                            min="0"
                            step="0.1"
                        />
                    </div>

                    <div className="form-group">
                        <label>Mísula Vertical na Cobertura (mvc) (cm):</label>
                        <input
                            type="number"
                            name="mvce"
                            value={formData.mvce}
                            onChange={handleChange}
                            min="0"
                            step="0.1"
                        />
                    </div>

                    <div className="form-group">
                        <label>Mísula Horizontal no Fundo (mhb) (cm):</label>
                        <input
                            type="number"
                            name="mhb"
                            value={formData.mhb}
                            onChange={handleChange}
                            min="0"
                            step="0.1"
                        />
                    </div>

                    <div className="form-group">
                        <label>Mísula Vertical no Fundo (mvb) (cm):</label>
                        <input
                            type="number"
                            name="mvb"
                            value={formData.mvb}
                            onChange={handleChange}
                            min="0"
                            step="0.1"
                        />
                    </div>

                    <div className="form-group">
                        <label>Espessura (h) (cm):</label>
                        <input
                            type="number"
                            name="espessura"
                            value={formData.espessura}
                            onChange={handleChange}
                            min="0"
                            step="0.1"
                        />
                    </div>
                </form>

                {/* Visualização 3D */}
                <div ref={mountRef} style={{ width: '500px', height: '300px', border: '1px solid black' }}></div>
            </div>
            <button type="submit">Confirmar</button>
        </div>
    );
};

export default GeometriaForm;,
