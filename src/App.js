import './App.css';

import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import Mensagem from './components/Mensagem'
import ListaTarefas from './components/ListaTarefas';
import { useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([

    {id: 1, texto: "tarefa1", completada: true},
    {id: 2, texto: "tarefa2", completada: false},
    {id: 3, texto: "tarefa4", completada: false},
    {id: 4, texto: "tarefa 4", completada: true},

  ])

  function adicionarTarefa(texto) {
    
    const novaTarefa = {id: tarefas.length + 1, texto: texto}

    const novasTarefas = [...tarefas, novaTarefa]
    setTarefas(novasTarefas)
    
  }

  function excluirTarefa(tarefa) {
    const novasTarefas = tarefas.filter(t => t.id !== tarefa.id)
    setTarefas(novasTarefas)
  }

  return (
    <div className="App">
      <Titulo texto="Minha Lista de Tarefas" />
      <Formulario adicionar={adicionarTarefa} />
      <ListaTarefas  tarefas={ tarefas } excluir={excluirTarefa} />
      <Mensagem texto="Uma mensagem de texto" />
    </div>
  );
}

export default App;
