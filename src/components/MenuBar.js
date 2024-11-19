// src/components/MenuBar.js

import React from 'react';

const MenuBar = ({ onCalcular, setActiveForm }) => {
    return (
        <div className="menu-bar">
            <button onClick={() => setActiveForm('fabricante')}>Dados do Fabricante</button>
            <button onClick={() => setActiveForm('obra')}>Dados da Obra</button>
            <button onClick={() => setActiveForm('cliente')}>Dados do Cliente</button>
            <button onClick={() => setActiveForm('telasSoldadas')}>Telas Soldadas</button>
            <button onClick={() => setActiveForm('geometria')}>Geometria</button>
            <button onClick={() => setActiveForm('instalacaoManuseio')}>Instalação e Manuseio</button>
            <button onClick={() => setActiveForm('sobrecarga')}>Sobrecarga</button>
            <button onClick={() => setActiveForm('armadura')}>Armadura</button>
            <button onClick={() => setActiveForm('criterioConstantes')}>Critério e Constantes</button>
            <button className="calcular-button" onClick={onCalcular}>
                <img src="path/to/calculating-icon.png" alt="Calcular" /> Calcular
            </button>
        </div>
    );
};

export default MenuBar;
