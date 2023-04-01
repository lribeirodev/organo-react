import './Titulo.scss'

export const Titulo = (props) => {
    return (
        <div className='cmp-titulo'>
             <h3 style={{color: props.color}}>{props.nome}</h3>
        </div>
    )
}

export default Titulo