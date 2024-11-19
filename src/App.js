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

        // Lógica para coletar dados e processar cálculos aqui
        // Coletar dados dos componentes de formulário (exemplo)
        const formData = {}; // Supondo que você usará um estado global ou outra abordagem para coletar dados

        alert('Cálculo realizado com sucesso!');
    };

    // Função para renderizar o formulário ativo
    const renderActiveForm = () => {
        switch (activeForm) {
            case 'fabricante':
                return <FabricanteForm />;
            case 'obra':
                return <ObraForm />;
            case 'cliente':
                return <ClienteForm />;
            case 'telasSoldadas':
                return <TelasSoldadas />;
            case 'geometria':
                return <GeometriaForm />;
            case 'instalacaoManuseio':
                return <InstalacaoManuseioForm />;
            case 'sobrecarga':
                return <SobrecargaForm />;
            case 'armadura':
                return <ArmaduraForm />;
            case 'criterioConstantes':
                return <CriterioConstantesForm />;
            default:
                return <FabricanteForm />;
        }
    };

    return (
        <div className="App">
            <MenuBar onCalcular={handleCalcular} setActiveForm={setActiveForm} />
            <div className="content">
                <h1></h1>
                {/* Renderizando o formulário ativo com base no estado */}
                {renderActiveForm()}
            </div>
        </div>
    );
}

export default App;
