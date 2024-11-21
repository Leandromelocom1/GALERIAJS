// src/App.js

import React, { useState } from 'react';
import MenuBar from './components/MenuBar';
import FabricanteForm from './components/FabricanteForm';
import ObraForm from './components/ObraForm';
import ClienteForm from './components/ClienteForm';
import TelasSoldadas from './components/TelasSoldadas';
import GeometriaForm from './components/GeometriaForm';
import InstalacaoManuseioForm from './components/InstalacaoManuseioForm';
import SobrecargaForm from './components/SobrecargaForm';
import ArmaduraForm from './components/ArmaduraForm';
import CriterioConstantesForm from './components/CriterioConstantesForm';

function App() {
    // Estado para controlar a exibição dos formulários
    const [activeForm, setActiveForm] = useState('fabricante');

    // Função para lidar com a lógica de cálculo
    const handleCalcular = () => {
        console.log('Iniciando o cálculo...');
        alert('Cálculo realizado com sucesso!');
    };

    // Mapeamento dinâmico dos formulários
    const forms = {
        fabricante: <FabricanteForm onNextStep={setActiveForm} />,
        obra: <ObraForm onNextStep={setActiveForm} />,
        cliente: <ClienteForm onNextStep={setActiveForm} />,
        telasSoldadas: <TelasSoldadas onNextStep={setActiveForm} />,
        geometria: <GeometriaForm onNextStep={setActiveForm} />,
        instalacaoManuseio: <InstalacaoManuseioForm onNextStep={setActiveForm} />,
        sobrecarga: <SobrecargaForm onNextStep={setActiveForm} />,
        armadura: <ArmaduraForm onNextStep={setActiveForm} />,
        criterioConstantes: <CriterioConstantesForm onNextStep={setActiveForm} />,
    };

    return (
        <div className="App">
            {/* MenuBar recebe setActiveForm para permitir navegação */}
            <MenuBar onCalcular={handleCalcular} setActiveForm={setActiveForm} />
            <div className="content">
                {/* Renderização dinâmica do formulário com base no estado activeForm */}
                {forms[activeForm]}
            </div>
        </div>
    );
}

export default App;
