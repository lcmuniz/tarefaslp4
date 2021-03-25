import './App.css';
import LoginScreen from './screens/LoginScreen';
import ls from 'local-storage'
import TarefasScreen from './screens/TarefasScreen';
import { useState } from 'react';
import axios from 'axios'

function App() {

  const [token, setToken] = useState('')
  const [mensagem, setMensagem] = useState('')

  async function logar(autor) {
    try {
        const resp = await axios.post('http://localhost:8888/auth/login', autor)
        setMensagem('')
        ls.set('token', resp.data.token)
        ls.set('email', resp.data.autor.email)
        ls.set('autor_id', resp.data.autor.id)
        setToken(resp.data.token)
    }
    catch(err) {
        setMensagem('Usuário e/ou senha inválidos.')
        ls.remove('token')
        ls.remove('email')
        ls.remove('autor_id')
        setToken('')
    }
  }

  if (token) {
    return <TarefasScreen />
  } 
  else {
    return <LoginScreen logar={logar} mensagem={mensagem} />
  }

}

export default App;
