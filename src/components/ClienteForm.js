import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClienteForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
        telefone: '',
        celular: '',
        email: '',
    });

    const navigate = useNavigate(); // Hook para redirecionar

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simular envio dos dados ao backend
        console.log('Dados do cliente:', formData);

        // Redirecionar para a tela de Telas Soldadas
        navigate('/telas-soldadas');
    };

    return (
        <div className="cliente-form">
            <h2>Dados do Cliente</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome do Cliente:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
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
                <button
                    type="button"
                    onClick={() =>
                        setFormData({
                            nome: '',
                            endereco: '',
                            numero: '',
                            bairro: '',
                            cidade: '',
                            estado: '',
                            cep: '',
                            telefone: '',
                            celular: '',
                            email: '',
                        })
                    }
                >
                    Cancelar
                </button>
            </form>
        </div>
    );
};

export default ClienteForm;
