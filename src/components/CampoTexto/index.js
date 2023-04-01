import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {

    const onTyped = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    const placeholderModificado = `${props.placeholder}...`;

    return (
        <div className="cmp-campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} required={props.obrigatorio} type="text" onChange={onTyped} placeholder={placeholderModificado} />
        </div>
    )
};

export default CampoTexto;