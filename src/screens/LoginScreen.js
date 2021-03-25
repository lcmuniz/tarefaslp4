import Titulo from '../components/Titulo'
import './LoginScreen.css'
import { useRef } from 'react'

function LoginScreen(props) {

    const emailField = useRef()
    const senhaField = useRef()

    function logar() {
        const autor = {
            email: emailField.current.value,
            senha: senhaField.current.value
        }
        props.logar(autor)
    }

    return (
        
        <div className="App">
            <Titulo texto="Login" />

            <div className="bg-white p-4 rounded-b-lg">
                <div className="flex justify-center">
                    <input ref={emailField} type="text" className="p-2 w-80 border" placeholder="Digite seu email"/>
                </div>
                <div className="flex justify-center mt-4">
                    <input ref={senhaField} type="password" className="p-2 w-80 border" placeholder="Digite sua senha"/>
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={logar} 
                        className="bg-indigo-800 p-4 rounded-lg text-white w-52">Entrar</button>
                </div>
                <div className="text-red-500 flex justify-center mt-6">{props.mensagem}</div>
            </div>

        </div>
    )

}

export default LoginScreen