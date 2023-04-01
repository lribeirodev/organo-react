import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import times from "../data/times.json"
import './Formulario.css'
import { useState } from "react"


const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('Programação')
    
    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastro({
            nome, cargo, imagem, time
        });
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const formCamposTextos = [
        {
            obrigatorio: true,
            label: "Nome",
            placeholder: "Digite seu nome",
            state : {
                value : nome,
                setValue : (value) => setNome(value)
            }
        },
        {
            obrigatorio: true,
            label: "Cargo",
            placeholder: "Digite seu cargo",
            state : {
                value : cargo,
                setValue : (value) => setCargo(value)
            }
        },
        {
            obrigatorio: false,
            label: "Imagem",
            placeholder: "Informe o endereço da imagem",
            state : {
                value : imagem,
                setValue : (value) => setImagem(value)
            }
        }
    ]

    return (
        <section className="cmp-formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                {formCamposTextos.map(item => {
                    const {obrigatorio, label, placeholder, state} = item;
                    return <CampoTexto
                        valor={state.value} 
                        key={label} 
                        obrigatorio={obrigatorio} 
                        label={label} 
                        placeholder={placeholder}
                        aoAlterado={val => state.setValue(val)}
                        />
                })}
                <ListaSuspensa 
                    valor={time} 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times.map(item => item.time)} 
                    aoAlterado={val => setTime(val)}
                    />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario