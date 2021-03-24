import './index.css'

import Tarefa from '../Tarefa'

function ListaTarefas(props) {
    return (
        <div className="conteudo">
            <ul className="lista">
            { props.tarefas.map( tarefa => 
                <Tarefa tarefa={tarefa} 
                        key={tarefa.id}
                        excluir={props.excluir} 
                        alterarStatus={props.alterarStatus} />  ) }
            </ul>
        </div>
    )
}

export default ListaTarefas