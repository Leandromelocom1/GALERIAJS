// src/components/GeometriaForm.js

import React, { useState } from 'react';

const GeometriaForm = () => {
    const [formData, setFormData] = useState({
        secaoConstante: 'Sim',
        comprimento: 1.0,
        finalidade: 'Aguas Pluviais',
        larguraLivre: 2.20,
        alturaLivre: 2.20,
        misula: 20.0,
        mvce: 20.0,
        mvb: 20.0,
        mhb: 20.0,
        espessura: 15.0,
        espessuraParedeLateral: 15.0,
        espessuraLajeFundo: 15.0,
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'number' ? parseFloat(value) : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Enviar dados para o backend ou processar conforme necessário
        console.log('Dados de Geometria:', formData);
    };

    return (
        <div className="geometria-form">
            <h2>Geometria</h2>
            <form onSubmit={handleSubmit}>
                {/* Seção Constante */}
                <div className="form-group">
                    <label>Seção constante:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="secaoConstante"
                                value="Sim"
                                checked={formData.secaoConstante === 'Sim'}
                                onChange={handleChange}
                            />
                            Sim
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="secaoConstante"
                                value="Não"
                                checked={formData.secaoConstante === 'Não'}
                                onChange={handleChange}
                            />
                            Não
                        </label>
                    </div>
                </div>

                {/* Comprimento Longitudinal */}
                <div className="form-group">
                    <label>Comprimento longitudinal (m):</label>
                    <input
                        type="number"
                        name="comprimento"
                        value={formData.comprimento}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                {/* Finalidade */}
                <div className="form-group">
                    <label>Finalidade:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="finalidade"
                                value="Aguas Pluviais"
                                checked={formData.finalidade === 'Aguas Pluviais'}
                                onChange={handleChange}
                            />
                            Águas Pluviais
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="finalidade"
                                value="Galeria Tecnica"
                                checked={formData.finalidade === 'Galeria Tecnica'}
                                onChange={handleChange}
                            />
                            Galeria Técnica
                        </label>
                    </div>
                </div>

                {/* Dimensões da Seção Transversal */}
                <h3>Dimensões da seção transversal</h3>
                <div className="form-group">
                    <label>Largura Livre (m):</label>
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
                    <label>Altura Livre (m):</label>
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
                    <label>Mísula (cm):</label>
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
                    <label>Mísula Vertical na Cobertura (cm):</label>
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
                    <label>Mísula Horizontal no Fundo (cm):</label>
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
                    <label>Espessura (cm):</label>
                    <input
                        type="number"
                        name="espessura"
                        value={formData.espessura}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label>Espessura da Parede Lateral (cm):</label>
                    <input
                        type="number"
                        name="espessuraParedeLateral"
                        value={formData.espessuraParedeLateral}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label>Espessura da Laje de Fundo (cm):</label>
                    <input
                        type="number"
                        name="espessuraLajeFundo"
                        value={formData.espessuraLajeFundo}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <button type="submit">Confirmar</button>
                <button type="button" onClick={() => setFormData({
                    secaoConstante: 'Sim',
                    comprimento: 1.0,
                    finalidade: 'Aguas Pluviais',
                    larguraLivre: 2.20,
                    alturaLivre: 2.20,
                    misula: 20.0,
                    mvce: 20.0,
                    mhb: 20.0,
                    espessura: 15.0,
                    espessuraParedeLateral: 15.0,
                    espessuraLajeFundo: 15.0,
                })}>Cancelar</button>
            </form>
        </div>
    );
};

export default GeometriaForm;
