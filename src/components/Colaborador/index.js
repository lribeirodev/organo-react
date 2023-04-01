import './Colaborador.scss'

export const Colaborador = ({nome, cargo, imagem}) => {
    return (
        <div className='cmp-colaborador'>
            <div className='cmp-colaborador__image-wrapper'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='cmp-colaborador__content-wrapper'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador 