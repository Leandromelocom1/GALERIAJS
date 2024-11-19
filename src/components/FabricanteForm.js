// src/components/FabricanteForm.js

import React, { useState } from 'react';

const FabricanteForm = () => {
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
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, logotipo: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Enviar os dados para o backend (exemplo)
        console.log('Dados do fabricante:', formData);
    };

    const handleClearLogo = () => {
        setFormData({ ...formData, logotipo: null });
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
                
                <div className="form-group">
                    <label>Nome do Fabricante:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="form-group">
                    <label>CPF ou CNPJ:</label>
                    <input
                        type="text"
                        name="cpfCnpj"
                        value={formData.cpfCnpj}
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

                <div className="form-group">
                    <label>Telefone:</label>
                    <input
                        type="text"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Celular:</label>
                    <input
                        type="text"
                        name="celular"
                        value={formData.celular}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>E-mail:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Confirmar</button>
                <button type="button" onClick={() => setFormData({
                    nome: '', cpfCnpj: '', endereco: '', numero: '', bairro: '', cidade: '', estado: '', cep: '', telefone: '', celular: '', email: '', logotipo: null
                })}>Cancelar</button>
            </form>
        </div>
    );
};

export default FabricanteForm;
