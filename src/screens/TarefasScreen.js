import './TarefasScreen.css';

import Titulo from '../components/Titulo'
import Formulario from '../components/Formulario'
import Mensagem from '../components/Mensagem'
import ListaTarefas from '../components/ListaTarefas';
import { useEffect, useState } from 'react';
import axios from 'axios'
import ls from 'local-storage'

function TarefasScreen() {

  
  useEffect(
    () => {

      async function getData() {

        const token = ls.get('token')

        const resposta = await axios.get('http://localhost:8888/tarefas/', 
          {
            headers: {
              'x-access-token': token
            }
          }
        )
        setTarefas(resposta.data)
      }
      getData()

    },
    []
  )


  const [tarefas, setTarefas] = useState([])

  async function mudarStatus(tarefa) {

    if (tarefa.completada === 'S') {
      tarefa.completada = 'N'
    }
    else {
      tarefa.completada = 'S'
    }

    const token = ls.get('token')

    await axios.post('http://localhost:8888/tarefas/', tarefa,  {headers: {'x-access-token': token}})

    const resposta = await axios.get('http://localhost:8888/tarefas/', 
      {
        headers: {
          'x-access-token': token
        }
      }
    )

    setTarefas(resposta.data)

  }

  async function adicionarTarefa(texto) {
    
    const autor_id = ls.get('autor_id')

    const novaTarefa = {texto: texto, autor_id: autor_id, completada: 'N'}

    const token = ls.get('token')

    await axios.post('http://localhost:8888/tarefas/', novaTarefa, {headers: {'x-access-token': token}})

    const resposta = await axios.get('http://localhost:8888/tarefas/', 
        {
          headers: {
            'x-access-token': token
          }
        }
      )
    
    setTarefas(resposta.data)

  }

  async function excluirTarefa(tarefa) {

    const token = ls.get('token')

    await axios.delete('http://localhost:8888/tarefas/' + tarefa.id, 
      {headers: {'x-access-token': token}}
    )

      const resposta = await axios.get('http://localhost:8888/tarefas/', 
      {
        headers: {
          'x-access-token': token
        }
      }
    )

    setTarefas(resposta.data)
  }

  function obterMensagem() {
    if (tarefas.length === 0) {
      return "Não existem tarefas cadastradas"
    }
    else if (tarefas.length === 1) {
      return "Uma tarefa cadastrada"
    }
    else {
      return tarefas.length + " tarefas cadastradas"
    }
  }



  return (
    <div className="App">
      <Titulo texto="Minha Lista de Tarefas" />
      <Formulario adicionar={adicionarTarefa} />
     
      <ListaTarefas tarefas={ tarefas } 
          excluir={excluirTarefa} 
          alterarStatus={mudarStatus} />
     
      <Mensagem texto={obterMensagem()} />
    </div>
  );
}

export default TarefasScreen;
