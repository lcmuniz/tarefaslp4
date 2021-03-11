import './index.css'

import Tarefa from '../Tarefa'

function ListaTarefas(props) {
    return (
        <div className="conteudo">
            <ul className="lista">
            { props.tarefas.map( tarefa => <Tarefa tarefa={tarefa}  excluir={props.excluir} />  ) }
            </ul>
        </div>
    )
}

export default ListaTarefas