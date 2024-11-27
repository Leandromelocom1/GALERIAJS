import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuBar = ({ onCalcular }) => {
    const navigate = useNavigate(); // Hook para navegação programática

    return (
        <div className="menu-bar">
            <button onClick={() => navigate('/')}>Fabricante</button>
            <button onClick={() => navigate('/obra')}>Obra</button>
            <button onClick={() => navigate('/cliente')}>Cliente</button>
            <button onClick={() => navigate('/telas-soldadas')}>Telas Soldadas</button>
            <button onClick={() => navigate('/geometria')}>Geometria</button>
            <button onClick={() => navigate('/instalacao-manuseio')}>Instalação & Manuseio</button>
            <button onClick={() => navigate('/sobrecarga')}>Sobrecarga</button>
            <button onClick={() => navigate('/armadura')}>Armadura</button>
            <button onClick={() => navigate('/criterio-constantes')}>Critérios & Constantes</button>
            <button onClick={onCalcular}>Calcular</button>
        </div>
    );
};

export default MenuBar;
