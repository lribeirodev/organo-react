import Colaborador from '../Colaborador'
import Titulo from '../Titulo'
import './Time.scss'

export const Time = (props) => {

    const sanitizeForClassName = (nome) => nome.replaceAll("&", "e").replaceAll(" ", "-").toLowerCase()

    return (
        props.cols.length > 0 && <section className={'cmp-time ' + sanitizeForClassName(props.nome)} >
            <Titulo nome={props.nome} />
            <div className='cmp-time__colaborador-wrapper'>
                {props.cols.map(col => {
                    return <Colaborador
                        key={col.nome}
                        nome={col.nome}
                        imagem={col.imagem}
                        cargo={col.cargo} />
                })}
            </div>
        </section>
    )
}

export default Time