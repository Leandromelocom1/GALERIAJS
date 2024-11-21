// src/components/ObraForm.js

import React, { useState } from 'react';

const ObraForm = ({ onNextStep }) => {
    const [formData, setFormData] = useState({
        especificacao: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Enviar os dados para o backend ou processá-los
        console.log('Dados da obra:', formData);

        // Passar para a próxima etapa (dados do cliente)
        onNextStep('cliente');
    };

    const handleCancel = () => {
        setFormData({
            especificacao: '',
            endereco: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            cep: '',
        });
    };

    return (
        <div className="obra-form">
            <h2>Dados da Obra</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Especificação dos Serviços Prestados:</label>
                    <input
                        type="text"
                        name="especificacao"
                        value={formData.especificacao}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Endereço:</label>
                    <input
                        type="text"
                        name="endereco"
                        value={formData.endereco}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Número:</label>
                    <input
                        type="text"
                        name="numero"
                        value={formData.numero}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Bairro:</label>
                    <input
                        type="text"
                        name="bairro"
                        value={formData.bairro}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Cidade:</label>
                    <input
                        type="text"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Estado:</label>
                    <input
                        type="text"
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>CEP:</label>
                    <input
                        type="text"
                        name="cep"
                        value={formData.cep}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-actions">
                    <button type="submit">Confirmar</button>
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default ObraForm;
