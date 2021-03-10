import './index.css'

function Mensagem(props) {
    return (
        <div className="mensagem">
            {props.texto}
        </div>
    )
}

export default Mensagem