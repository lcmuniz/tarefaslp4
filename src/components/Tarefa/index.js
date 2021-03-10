import './index.css'

function Tarefa(props) {
    return (
        <div className="item">
            <i className="fa fa-circle circulo"></i>
            <p className="texto">{props.texto}</p>
            <i className="fa fa-trash lixeira"></i>
        </div>
    )
}

export default Tarefa