import './Botao.css'

const Botao = (props) => {
    return (
        <button className="cmp-botao">
            {props.children}
        </button>
    )
}

export default Botao