import './App.css';

import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import Mensagem from './components/Mensagem'
import ListaTarefas from './components/ListaTarefas';
import { useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState(['Tarefa 1', 'Tarefa 2', "Tarefa 3"])

  return (
    <div className="App">
      <Titulo texto="Minha Lista de Tarefas" />
      <Formulario />
      <ListaTarefas  tarefas={ tarefas } />
      <Mensagem texto="Uma mensagem de texto" />
    </div>
  );
}

export default App;
