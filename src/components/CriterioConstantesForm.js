// src/components/CriterioConstantesForm.js

import React, { useState } from 'react';

const CriterioConstantesForm = () => {
    const [formData, setFormData] = useState({
        resistenciaConcreto: 30.0,
        pesoEspecificoConcreto: 25.0,
        pesoEspecificoAco: 78.0,
        moduloReacaoSolo: 15.0,
        comprimentoMaxElemento: 20.0,
        estadoLimiteServico: {
            pesoProprio: 1.0,
            solo: 1.0,
            fissuracao: 0.5,
            fadiga: 0.8,
        },
        estadoLimiteUltimo: {
            pesoProprio: 1.3,
            solo: 1.35,
            cargaMovel: 1.5,
            agua: 1.2,
        },
        resistenciaSolo: 'Baixa',
        calculoAutomatico: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else if (name in formData.estadoLimiteServico || name in formData.estadoLimiteUltimo) {
            const [key, subKey] = name.split('.');
            setFormData({
                ...formData,
                [key]: {
                    ...formData[key],
                    [subKey]: parseFloat(value),
                },
            });
        } else {
            setFormData({ ...formData, [name]: type === 'number' ? parseFloat(value) : value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados de Critério e Constantes:', formData);
    };

    return (
        <div className="criterio-constantes-form">
            <h2>Critério e Constantes</h2>
            <form onSubmit={handleSubmit}>
                {/* Dados dos Materiais */}
                <h3>Dados dos Materiais</h3>
                <div className="form-group">
                    <label>Resistência característica do concreto (fck) (MPa):</label>
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
                    <label>Peso específico do concreto (kN/m³):</label>
                    <input
                        type="number"
                        name="pesoEspecificoConcreto"
                        value={formData.pesoEspecificoConcreto}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label>Peso específico do aço (kN/m³):</label>
                    <input
                        type="number"
                        name="pesoEspecificoAco"
                        value={formData.pesoEspecificoAco}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="calculoAutomatico"
                            checked={formData.calculoAutomatico}
                            onChange={handleChange}
                        />
                        Cálculo automático do módulo de deformação longitudinal (E<sub>c</sub>)
                    </label>
                </div>

                {/* Resistência do Solo na Base */}
                <h3>Resistência do Solo na Base (Apoio Elástico)</h3>
                <div className="form-group">
                    <label>Resistência do Solo:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="resistenciaSolo"
                                value="Baixa"
                                checked={formData.resistenciaSolo === 'Baixa'}
                                onChange={handleChange}
                            />
                            Baixa
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="resistenciaSolo"
                                value="Média"
                                checked={formData.resistenciaSolo === 'Média'}
                                onChange={handleChange}
                            />
                            Média
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="resistenciaSolo"
                                value="Alta"
                                checked={formData.resistenciaSolo === 'Alta'}
                                onChange={handleChange}
                            />
                            Alta
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="resistenciaSolo"
                                value="Definido pelo usuário"
                                checked={formData.resistenciaSolo === 'Definido pelo usuário'}
                                onChange={handleChange}
                            />
                            Definido pelo usuário
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Módulo de reação do solo recomendado (k<sub>r</sub>) (MPa/m):</label>
                    <input
                        type="number"
                        name="moduloReacaoSolo"
                        value={formData.moduloReacaoSolo}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                </div>

                {/* Comprimento Máximo de Cada Elemento Finito */}
                <h3>Comprimento Máximo de Cada Elemento Finito</h3>
                <div className="form-group">
                    <input
                        type="number"
                        name="comprimentoMaxElemento"
                        value={formData.comprimentoMaxElemento}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                    />
                    <label>cm</label>
                </div>

                {/* Coeficiente de Ponderação Para as Ações */}
                <h3>Coeficiente de Ponderação Para as Ações</h3>
                <h4>Estado limite de serviço</h4>
                <div className="form-group">
                    <label>Peso Próprio:</label>
                    <input
                        type="number"
                        name="estadoLimiteServico.pesoProprio"
                        value={formData.estadoLimiteServico.pesoProprio}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label>Solo:</label>
                    <input
                        type="number"
                        name="estadoLimiteServico.solo"
                        value={formData.estadoLimiteServico.solo}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label>Fissuração (ψ<sub>1</sub>):</label>
                    <input
                        type="number"
                        name="estadoLimiteServico.fissuracao"
                        value={formData.estadoLimiteServico.fissuracao}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label>Fadiga (ψ<sub>1</sub>, fad):</label>
                    <input
                        type="number"
                        name="estadoLimiteServico.fadiga"
                        value={formData.estadoLimiteServico.fadiga}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                {/* Estado limite último */}
                <h4>Estado limite último</h4>
                <div className="form-group">
                    <label>Peso Próprio:</label>
                    <input
                        type="number"
                        name="estadoLimiteUltimo.pesoProprio"
                        value={formData.estadoLimiteUltimo.pesoProprio}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label>Solo:</label>
                    <input
                        type="number"
                        name="estadoLimiteUltimo.solo"
                        value={formData.estadoLimiteUltimo.solo}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label>Carga Móvel:</label>
                    <input
                        type="number"
                        name="estadoLimiteUltimo.cargaMovel"
                        value={formData.estadoLimiteUltimo.cargaMovel}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label>Água:</label>
                    <input
                        type="number"
                        name="estadoLimiteUltimo.agua"
                        value={formData.estadoLimiteUltimo.agua}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                <button type="submit">Confirmar</button>
                <button type="button" onClick={() => setFormData({
                    resistenciaConcreto: 30.0,
                    pesoEspecificoConcreto: 25.0,
                    pesoEspecificoAco: 78.0,
                    moduloReacaoSolo: 15.0,
                    comprimentoMaxElemento: 20.0,
                    estadoLimiteServico: {
                        pesoProprio: 1.0,
                        solo: 1.0,
                        fissuracao: 0.5,
                        fadiga: 0.8,
                    },
                    estadoLimiteUltimo: {
                        pesoProprio: 1.3,
                        solo: 1.35,
                        cargaMovel: 1.5,
                        agua: 1.2,
                    },
                    resistenciaSolo: 'Baixa',
                    calculoAutomatico: true,
                })}>Cancelar</button>
            </form>
        </div>
    );
};

export default CriterioConstantesForm;
