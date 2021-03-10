import './index.css'

function Titulo(props) {
    return (
        <div className="titulo">
            { props.texto }
        </div>
    )
}

export default Titulo