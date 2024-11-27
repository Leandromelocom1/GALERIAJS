import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    // Função para lidar com a lógica de cálculo
    const handleCalcular = () => {
        console.log('Iniciando o cálculo...');
        alert('Cálculo realizado com sucesso!');
    };

    return (
        <Router>
            <div className="App">
                {/* MenuBar para navegação global e lógica de cálculo */}
                <MenuBar onCalcular={handleCalcular} />
                <div className="content">
                    <Routes>
                        {/* Rotas para cada componente do processo */}
                        <Route path="/" element={<FabricanteForm />} />
                        <Route path="/obra" element={<ObraForm />} />
                        <Route path="/cliente" element={<ClienteForm />} />
                        <Route path="/telas-soldadas" element={<TelasSoldadas />} />
                        <Route path="/geometria" element={<GeometriaForm />} />
                        <Route path="/instalacao-manuseio" element={<InstalacaoManuseioForm />} />
                        <Route path="/sobrecarga" element={<SobrecargaForm />} />
                        <Route path="/armadura" element={<ArmaduraForm />} />
                        <Route path="/criterio-constantes" element={<CriterioConstantesForm />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
