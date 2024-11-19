// src/components/InstalacaoManuseioForm.js

import React, { useState } from 'react';

const InstalacaoManuseioForm = () => {
    const [formData, setFormData] = useState({
        solo: 'Solo Padrão',
        pesoEspecifico: 18.0,
        anguloAtrito: 30.0,
        coefEmpuxoAtivo: 0.3333,
        coefEmpuxoRepouso: 0.5,
        coefAtritoSolo: 0.5774,
        alturaTerra: 0.3,
        espessuraPavimento: 0.2,
        resistenciaConcreto: 20.0,
        coefImpacto: 1.2,
        distanciaIçamento: 35.0,
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
        console.log('Dados de Instalação e Manuseio:', formData);
    };

    return (
        <div className="instalacao-manuseio-form">
            <h2>Instalação e Manuseio</h2>
            <form onSubmit={handleSubmit}>
                {/* Especificação do Solo de Aterro */}
                <div className="form-group">
                    <label>Especificação do Solo de Aterro:</label>
                    <select name="solo" value={formData.solo} onChange={handleChange}>
                        <option value="Solo Padrão">Solo Padrão</option>
                        <option value="Solo Específico">Solo Específico</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Peso específico do solo (kN/m³):</label>
                    <input
                        type="number"
                        name="pesoEspecifico"
                        value={formData.pesoEspecifico}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label>Ângulo de atrito do solo (°):</label>
                    <input
                        type="number"
                        name="anguloAtrito"
                        value={formData.anguloAtrito}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label>Coeficiente de empuxo ativo (ka):</label>
                    <input
                        type="number"
                        name="coefEmpuxoAtivo"
                        value={formData.coefEmpuxoAtivo}
                        onChange={handleChange}
                        min="0"
                        step="0.0001"
                    />
                </div>

                <div className="form-group">
                    <label>Coeficiente de empuxo em repouso (k0):</label>
                    <input
                        type="number"
                        name="coefEmpuxoRepouso"
                        value={formData.coefEmpuxoRepouso}
                        onChange={handleChange}
                        min="0"
                        step="0.0001"
                    />
                </div>

                <div className="form-group">
                    <label>Coeficiente de atrito do solo (μ):</label>
                    <input
                        type="number"
                        name="coefAtritoSolo"
                        value={formData.coefAtritoSolo}
                        onChange={handleChange}
                        min="0"
                        step="0.0001"
                    />
                </div>

                {/* Dados da Instalação */}
                <h3>Dados da Instalação</h3>
                <div className="form-group">
                    <label>Altura de Terra (h1) (m):</label>
                    <input
                        type="number"
                        name="alturaTerra"
                        value={formData.alturaTerra}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label>Espessura do Pavimento (hpav) (m):</label>
                    <input
                        type="number"
                        name="espessuraPavimento"
                        value={formData.espessuraPavimento}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                {/* Informações de Manuseio */}
                <h3>Informações de Manuseio</h3>
                <div className="form-group">
                    <label>Resistência do concreto (fcj) (MPa):</label>
                    <input
                        type="number"
                        name="resistenciaConcreto"
                        value={formData.resistenciaConcreto}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label>Coeficiente de impacto (φ):</label>
                    <input
                        type="number"
                        name="coefImpacto"
                        value={formData.coefImpacto}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label>Distância de içamento (dica) (cm):</label>
                    <input
                        type="number"
                        name="distanciaIçamento"
                        value={formData.distanciaIçamento}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <button type="submit">Confirmar</button>
                <button type="button" onClick={() => setFormData({
                    solo: 'Solo Padrão',
                    pesoEspecifico: 18.0,
                    anguloAtrito: 30.0,
                    coefEmpuxoAtivo: 0.3333,
                    coefEmpuxoRepouso: 0.5,
                    coefAtritoSolo: 0.5774,
                    alturaTerra: 0.3,
                    espessuraPavimento: 0.2,
                    resistenciaConcreto: 20.0,
                    coefImpacto: 1.2,
                    distanciaIçamento: 35.0,
                })}>Cancelar</button>
            </form>
        </div>
    );
};

export default InstalacaoManuseioForm;
