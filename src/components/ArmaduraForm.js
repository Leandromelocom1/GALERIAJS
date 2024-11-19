// src/components/ArmaduraForm.js

import React, { useState } from 'react';

const ArmaduraForm = () => {
    const [formData, setFormData] = useState({
        aberturaMaxima: 0.20,
        reducaoRigidez: 0.50,
        resistenciaCoracao: 180.0,
        resistenciaQuina: 110.0,
        coefPonderacaoConcreto: 1.30,
        coefPonderacaoAco: 1.15,
        espacoMinimo: 5.0,
        espacoMaximo: 35.0,
        cobrimentoArmadura: 3.50,
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
        console.log('Dados da Armadura:', formData);
    };

    return (
        <div className="armadura-form">
            <h2>Armadura</h2>
            <form onSubmit={handleSubmit}>
                {/* Consideração Quanto à Fissuração */}
                <h3>Consideração Quanto à Fissuração</h3>
                <div className="form-group">
                    <label>Abertura máxima (w) (mm):</label>
                    <input
                        type="number"
                        name="aberturaMaxima"
                        value={formData.aberturaMaxima}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label>Redução de rigidez da não-linearidade física:</label>
                    <input
                        type="number"
                        name="reducaoRigidez"
                        value={formData.reducaoRigidez}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                {/* Consideração Quanto à Fadiga */}
                <h3>Consideração Quanto à Fadiga</h3>
                <div className="form-group">
                    <label>Resist. da arm. no coração (MPa):</label>
                    <input
                        type="number"
                        name="resistenciaCoracao"
                        value={formData.resistenciaCoracao}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label>Resist. da arm. na quina superior (MPa):</label>
                    <input
                        type="number"
                        name="resistenciaQuina"
                        value={formData.resistenciaQuina}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                {/* Coeficiente de Ponderação (Materiais) */}
                <h3>Coeficiente de Ponderação (Materiais)</h3>
                <div className="form-group">
                    <label>Concreto (γc):</label>
                    <input
                        type="number"
                        name="coefPonderacaoConcreto"
                        value={formData.coefPonderacaoConcreto}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label>Aço (γs):</label>
                    <input
                        type="number"
                        name="coefPonderacaoAco"
                        value={formData.coefPonderacaoAco}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                {/* Espaçamento entre Barras */}
                <h3>Espaçamento entre barras</h3>
                <div className="form-group">
                    <label>Mínimo (cm):</label>
                    <input
                        type="number"
                        name="espacoMinimo"
                        value={formData.espacoMinimo}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label>Máximo (cm):</label>
                    <input
                        type="number"
                        name="espacoMaximo"
                        value={formData.espacoMaximo}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                {/* Cobrimento das Armaduras */}
                <h3>Cobrimento das armaduras</h3>
                <div className="form-group">
                    <label>(cm):</label>
                    <input
                        type="number"
                        name="cobrimentoArmadura"
                        value={formData.cobrimentoArmadura}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <button type="submit">Confirmar</button>
                <button type="button" onClick={() => setFormData({
                    aberturaMaxima: 0.20,
                    reducaoRigidez: 0.50,
                    resistenciaCoracao: 180.0,
                    resistenciaQuina: 110.0,
                    coefPonderacaoConcreto: 1.30,
                    coefPonderacaoAco: 1.15,
                    espacoMinimo: 5.0,
                    espacoMaximo: 35.0,
                    cobrimentoArmadura: 3.50,
                })}>Cancelar</button>
            </form>
        </div>
    );
};

export default ArmaduraForm;
