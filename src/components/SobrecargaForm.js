// src/components/SobrecargaForm.js

import React, { useState } from 'react';

const SobrecargaForm = () => {
    const [formData, setFormData] = useState({
        sobrecargaTipo: 'Rodoviário',
        trafegoTipo: 'Classe 30',
        pesoVeiculo: 300.0,
        distanciaEntreEixos: 1.5,
        distanciaEntreRodas: 2.0,
        areaContatoRoda: 20.0,
        larguraContatoRoda: 40.0,
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
        console.log('Dados da Sobrecarga:', formData);
    };

    return (
        <div className="sobrecarga-form">
            <h2>Sobrecarga</h2>
            <form onSubmit={handleSubmit}>
                {/* Sobrecarga Produzida Pelo Tráfego */}
                <div className="form-group">
                    <label>Sobrecarga Produzida Pelo Tráfego:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="sobrecargaTipo"
                                value="Rodoviário"
                                checked={formData.sobrecargaTipo === 'Rodoviário'}
                                onChange={handleChange}
                            />
                            Rodoviário
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="sobrecargaTipo"
                                value="Força Uniformemente Distribuída"
                                checked={formData.sobrecargaTipo === 'Força Uniformemente Distribuída'}
                                onChange={handleChange}
                            />
                            Força Uniformemente Distribuída
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="sobrecargaTipo"
                                value="Força Parcialmente Distribuída"
                                checked={formData.sobrecargaTipo === 'Força Parcialmente Distribuída'}
                                onChange={handleChange}
                            />
                            Força Parcialmente Distribuída
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="sobrecargaTipo"
                                value="Nula ou Desprezível"
                                checked={formData.sobrecargaTipo === 'Nula ou Desprezível'}
                                onChange={handleChange}
                            />
                            Nula ou Desprezível
                        </label>
                    </div>
                </div>

                {/* Tipo de Tráfego */}
                <div className="form-group">
                    <label>Tipo de Tráfego:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="trafegoTipo"
                                value="Classe 30"
                                checked={formData.trafegoTipo === 'Classe 30'}
                                onChange={handleChange}
                            />
                            Classe 30
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="trafegoTipo"
                                value="Classe 45"
                                checked={formData.trafegoTipo === 'Classe 45'}
                                onChange={handleChange}
                            />
                            Classe 45
                        </label>
                    </div>
                </div>

                {/* Características da Sobrecarga */}
                <h3>Características da Sobrecarga</h3>
                <div className="form-group">
                    <label>Peso do veículo tipo (Q) (kN):</label>
                    <input
                        type="number"
                        name="pesoVeiculo"
                        value={formData.pesoVeiculo}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label>Distância entre eixos (ee) (m):</label>
                    <input
                        type="number"
                        name="distanciaEntreEixos"
                        value={formData.distanciaEntreEixos}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label>Distância entre rodas (er) (m):</label>
                    <input
                        type="number"
                        name="distanciaEntreRodas"
                        value={formData.distanciaEntreRodas}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label>Área de contato da roda (S) (cm²):</label>
                    <input
                        type="number"
                        name="areaContatoRoda"
                        value={formData.areaContatoRoda}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label>Largura de contato da roda (b) (cm):</label>
                    <input
                        type="number"
                        name="larguraContatoRoda"
                        value={formData.larguraContatoRoda}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <button type="submit">Confirmar</button>
                <button type="button" onClick={() => setFormData({
                    sobrecargaTipo: 'Rodoviário',
                    trafegoTipo: 'Classe 30',
                    pesoVeiculo: 300.0,
                    distanciaEntreEixos: 1.5,
                    distanciaEntreRodas: 2.0,
                    areaContatoRoda: 20.0,
                    larguraContatoRoda: 40.0,
                })}>Cancelar</button>
            </form>
        </div>
    );
};

export default SobrecargaForm;
