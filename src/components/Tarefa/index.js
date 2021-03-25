import './index.css'

function Tarefa(props) {

    function aoClicar() {
        props.excluir(props.tarefa);
    }

    function aoAlterarStatus() {
        props.alterarStatus(props.tarefa)
    }

    function obterClasseCirculo(tarefa) {
        if (tarefa.completada === 'S') {
            return "fa fa-check-circle circulo"
        }
        else {
            return "fa fa-circle circulo"
        }
    }

    function obterClasseTexto(tarefa) {
        if (tarefa.completada === 'S') {
            return "texto texto-riscado"
        }
        else {
            return "texto"
        }
    }

    return (
        <div className="item p-4">
            <i className={ obterClasseCirculo(props.tarefa) } onClick={aoAlterarStatus} ></i>
            <p className={ obterClasseTexto(props.tarefa) }>{props.tarefa.texto}</p>
            <i className="fa fa-trash lixeira" onClick={aoClicar}></i>
        </div>
    )
}

export default Tarefa