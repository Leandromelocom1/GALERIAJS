import React, { useState, useEffect } from "react";

const TelasSoldadas = () => {
    const [telas, setTelas] = useState([]);
    const [newTela, setNewTela] = useState({
        designacao: "",
        espacamentoLongitudinal: "",
        espacamentoTransversal: "",
        diametroLongitudinal: "",
        diametroTransversal: "",
        secaoLongitudinal: "",
        secaoTransversal: "",
    });

    const fetchTelas = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/telasSoldadas");
            const data = await response.json();
            setTelas(data);
        } catch (error) {
            console.error("Erro ao buscar telas:", error);
        }
    };

    useEffect(() => {
        fetchTelas();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const numericFields = [
            "espacamentoLongitudinal",
            "espacamentoTransversal",
            "diametroLongitudinal",
            "diametroTransversal",
            "secaoLongitudinal",
            "secaoTransversal",
        ];
        setNewTela({
            ...newTela,
            [name]: numericFields.includes(name) ? Number(value) : value,
        });
    };

    const handleAddTela = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/telasSoldadas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTela),
            });

            if (response.ok) {
                const addedTela = await response.json();
                setTelas([...telas, addedTela]);
                setNewTela({
                    designacao: "",
                    espacamentoLongitudinal: "",
                    espacamentoTransversal: "",
                    diametroLongitudinal: "",
                    diametroTransversal: "",
                    secaoLongitudinal: "",
                    secaoTransversal: "",
                });
            } else {
                console.error("Erro ao adicionar a nova tela.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    return (
        <div className="telas-soldadas">
            <h2>Telas Soldadas Disponíveis</h2>
            <table>
                <thead>
                    <tr>
                        <th>Designação</th>
                        <th>Espaçamento Longitudinal</th>
                        <th>Espaçamento Transversal</th>
                        <th>Diâmetro Longitudinal</th>
                        <th>Diâmetro Transversal</th>
                        <th>Seção Longitudinal</th>
                        <th>Seção Transversal</th>
                    </tr>
                </thead>
                <tbody>
                    {telas.map((tela, index) => (
                        <tr key={index}>
                            <td>{tela.designacao}</td>
                            <td>{tela.espacamentoLongitudinal}</td>
                            <td>{tela.espacamentoTransversal}</td>
                            <td>{tela.diametroLongitudinal}</td>
                            <td>{tela.diametroTransversal}</td>
                            <td>{tela.secaoLongitudinal}</td>
                            <td>{tela.secaoTransversal}</td>
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
                    name="espacamentoLongitudinal"
                    placeholder="Espaçamento Longitudinal"
                    value={newTela.espacamentoLongitudinal}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="espacamentoTransversal"
                    placeholder="Espaçamento Transversal"
                    value={newTela.espacamentoTransversal}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="diametroLongitudinal"
                    placeholder="Diâmetro Longitudinal"
                    value={newTela.diametroLongitudinal}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="diametroTransversal"
                    placeholder="Diâmetro Transversal"
                    value={newTela.diametroTransversal}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="secaoLongitudinal"
                    placeholder="Seção Longitudinal"
                    value={newTela.secaoLongitudinal}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="secaoTransversal"
                    placeholder="Seção Transversal"
                    value={newTela.secaoTransversal}
                    onChange={handleChange}
                />
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
};

export default TelasSoldadas;
