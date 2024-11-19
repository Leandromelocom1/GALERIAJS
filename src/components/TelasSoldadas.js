// src/components/TelasSoldadas.js

import React, { useState } from 'react';

const TelasSoldadas = () => {
    const [telas, setTelas] = useState([
        { designacao: 'L113', espacamentoLong: 10, espacamentoTransv: 30, diametroLong: 3.8, diametroTransv: 3.8, secaoLong: 1.13, secaoTransv: 0.38 },
        { designacao: 'L138', espacamentoLong: 10, espacamentoTransv: 30, diametroLong: 4.2, diametroTransv: 4.2, secaoLong: 1.38, secaoTransv: 0.46 },
        { designacao: 'L159', espacamentoLong: 10, espacamentoTransv: 30, diametroLong: 4.5, diametroTransv: 4.5, secaoLong: 1.59, secaoTransv: 0.53 },
        { designacao: 'L196', espacamentoLong: 10, espacamentoTransv: 30, diametroLong: 5.0, diametroTransv: 5.0, secaoLong: 1.96, secaoTransv: 0.65 },
        { designacao: 'L246', espacamentoLong: 10, espacamentoTransv: 30, diametroLong: 5.6, diametroTransv: 5.6, secaoLong: 2.46, secaoTransv: 0.82 },
        { designacao: 'L283', espacamentoLong: 10, espacamentoTransv: 30, diametroLong: 6.0, diametroTransv: 6.0, secaoLong: 2.83, secaoTransv: 0.94 },
        { designacao: 'L335', espacamentoLong: 10, espacamentoTransv: 30, diametroLong: 6.3, diametroTransv: 6.3, secaoLong: 3.35, secaoTransv: 0.94 },
        { designacao: 'L396', espacamentoLong: 10, espacamentoTransv: 30, diametroLong: 7.0, diametroTransv: 7.0, secaoLong: 3.96, secaoTransv: 0.96 },
        { designacao: 'L503', espacamentoLong: 10, espacamentoTransv: 30, diametroLong: 8.0, diametroTransv: 8.0, secaoLong: 5.03, secaoTransv: 0.96 },
        { designacao: 'L636', espacamentoLong: 10, espacamentoTransv: 30, diametroLong: 9.0, diametroTransv: 9.0, secaoLong: 6.36, secaoTransv: 0.96 },
        { designacao: 'L785', espacamentoLong: 10, espacamentoTransv: 30, diametroLong: 10.0, diametroTransv: 6.0, secaoLong: 7.85, secaoTransv: 0.94 }
    ]);

    const [newTela, setNewTela] = useState({
        designacao: '',
        espacamentoLong: '',
        espacamentoTransv: '',
        diametroLong: '',
        diametroTransv: '',
        secaoLong: '',
        secaoTransv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTela({ ...newTela, [name]: value });
    };

    const handleAddTela = (e) => {
        e.preventDefault();
        setTelas([...telas, newTela]);
        setNewTela({
            designacao: '',
            espacamentoLong: '',
            espacamentoTransv: '',
            diametroLong: '',
            diametroTransv: '',
            secaoLong: '',
            secaoTransv: ''
        });
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
