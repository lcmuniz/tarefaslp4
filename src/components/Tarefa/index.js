import './index.css'

function Tarefa(props) {

    function aoClicar() {
        props.excluir(props.tarefa);
    }

    function obterClasse(tarefa) {
        if (tarefa.completada) {
            return "fa fa-check-circle circulo"
        }
        else {
            return "fa fa-circle circulo"
        }
    }

    return (
        <div className="item">
            <i className={ obterClasse(props.tarefa) }></i>
            <p className="texto">{props.tarefa.id} - {props.tarefa.texto}</p>
            <i className="fa fa-trash lixeira" onClick={aoClicar}></i>
        </div>
    )
}

export default Tarefa