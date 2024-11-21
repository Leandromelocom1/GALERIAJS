import React, { useState, useEffect } from 'react';

const TelasSoldadas = () => {
    const [telas, setTelas] = useState([]);
    const [newTela, setNewTela] = useState({
        designacao: '',
        espacamentoLong: '',
        espacamentoTransv: '',
        diametroLong: '',
        diametroTransv: '',
        secaoLong: '',
        secaoTransv: ''
    });

    // Função para buscar telas do backend
    const fetchTelas = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/telasSoldadas');
            const data = await response.json();
            setTelas(data);
        } catch (error) {
            console.error('Erro ao buscar telas:', error);
        }
    };

    // Carregar as telas ao montar o componente
    useEffect(() => {
        fetchTelas();
    }, []);

    // Atualizar o estado do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTela({ ...newTela, [name]: value });
    };

    // Adicionar uma nova tela
    const handleAddTela = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/telasSoldadas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTela)
            });

            if (response.ok) {
                const addedTela = await response.json();
                setTelas([...telas, addedTela]); // Atualizar a lista de telas no frontend
                setNewTela({
                    designacao: '',
                    espacamentoLong: '',
                    espacamentoTransv: '',
                    diametroLong: '',
                    diametroTransv: '',
                    secaoLong: '',
                    secaoTransv: ''
                });
            } else {
                console.error('Erro ao adicionar a nova tela.');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };

    return (
        <div className="telas-soldadas">
            <h2>Telas Soldadas Disponíveis (CA 60)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Designação</th>
                        <th>Espaçamento Longitudinal (cm)</th>
                        <th>Espaçamento Transversal (cm)</th>
                        <th>Diâmetro Longitudinal (mm)</th>
                        <th>Diâmetro Transversal (mm)</th>
                        <th>Seção Longitudinal (cm²/m)</th>
                        <th>Seção Transversal (cm²/m)</th>
                    </tr>
                </thead>
                <tbody>
                    {telas.map((tela, index) => (
                        <tr key={index}>
                            <td>{tela.designacao}</td>
                            <td>{tela.espacamentoLong}</td>
                            <td>{tela.espacamentoTransv}</td>
                            <td>{tela.diametroLong}</td>
                            <td>{tela.diametroTransv}</td>
                            <td>{tela.secaoLong}</td>
                            <td>{tela.secaoTransv}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>Adicionar Nova Tela</h3>
            <form onSubmit={handleAddTela}>
                <input
                    type="text"
                    name="designacao"
                    placeholder="Designação"
                    value={newTela.designacao}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="espacamentoLong"
                    placeholder="Espaçamento Longitudinal (cm)"
                    value={newTela.espacamentoLong}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="espacamentoTransv"
                    placeholder="Espaçamento Transversal (cm)"
                    value={newTela.espacamentoTransv}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="diametroLong"
                    placeholder="Diâmetro Longitudinal (mm)"
                    value={newTela.diametroLong}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="diametroTransv"
                    placeholder="Diâmetro Transversal (mm)"
                    value={newTela.diametroTransv}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="secaoLong"
                    placeholder="Seção Longitudinal (cm²/m)"
                    value={newTela.secaoLong}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="secaoTransv"
                    placeholder="Seção Transversal (cm²/m)"
                    value={newTela.secaoTransv}
                    onChange={handleChange}
                />
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
};

export default TelasSoldadas;
