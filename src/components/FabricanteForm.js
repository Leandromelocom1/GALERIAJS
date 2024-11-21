// src/components/FabricanteForm.js

import React, { useState } from 'react';

const InputField = ({ label, type, name, value, onChange }) => (
    <div className="form-group">
        <label>{label}:</label>
        <input type={type} name={name} value={value} onChange={onChange} />
    </div>
);

const FabricanteForm = ({ onNextStep }) => {
    const [formData, setFormData] = useState({
        nome: '',
        cpfCnpj: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
        telefone: '',
        celular: '',
        email: '',
        logotipo: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prevState) => ({ ...prevState, logotipo: e.target.files[0] }));
    };

    const handleClearLogo = () => {
        setFormData((prevState) => ({ ...prevState, logotipo: null }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do Fabricante:', formData);

        // Simula o envio dos dados e avança para a próxima etapa
        onNextStep('obra'); // Passa para a próxima etapa (dados da obra)
    };

    const handleCancel = () => {
        setFormData({
            nome: '',
            cpfCnpj: '',
            endereco: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            cep: '',
            telefone: '',
            celular: '',
            email: '',
            logotipo: null,
        });
    };

    return (
        <div className="fabricante-form">
            <h2>Dados do Fabricante</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Logotipo do Fabricante:</label>
                    <input type="file" onChange={handleFileChange} />
                    {formData.logotipo && (
                        <div>
                            <p>Arquivo selecionado: {formData.logotipo.name}</p>
                            <button type="button" onClick={handleClearLogo}>Limpar Logotipo</button>
                        </div>
                    )}
                </div>

                <InputField
                    label="Nome do Fabricante"
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                />

                <InputField
                    label="CPF ou CNPJ"
                    type="text"
                    name="cpfCnpj"
                    value={formData.cpfCnpj}
                    onChange={handleChange}
                />

                <InputField
                    label="Endereço"
                    type="text"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                />

                <InputField
                    label="Número"
                    type="text"
                    name="numero"
                    value={formData.numero}
                    onChange={handleChange}
                />

                <InputField
                    label="Bairro"
                    type="text"
                    name="bairro"
                    value={formData.bairro}
                    onChange={handleChange}
                />

                <InputField
                    label="Cidade"
                    type="text"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                />

                <InputField
                    label="Estado"
                    type="text"
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                />

                <InputField
                    label="CEP"
                    type="text"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                />

                <InputField
                    label="Telefone"
                    type="text"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                />

                <InputField
                    label="Celular"
                    type="text"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                />

                <InputField
                    label="E-mail"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <div className="form-actions">
                    <button type="submit">Confirmar</button>
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default FabricanteForm;
