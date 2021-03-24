import { useRef } from 'react'
import './index.css'

function Formulario(props) {


    const entrada = useRef()

    function aoDigitar(evento) {
        if (evento.keyCode === 13) {
            aoClicar()
        }
    }

    function aoClicar() {
        props.adicionar(entrada.current.value)
        entrada.current.value = ''
        entrada.current.focus()
    }

    return (
        <div className="formulario">
            <div className="celula1">
                <input ref={entrada} className="entrada" onKeyUp={aoDigitar} />
            </div>
            <div className="celula2">
                <i className="fa fa-plus-circle mais" onClick={aoClicar}></i>
            </div>
        </div>
    )
}

export default Formulario