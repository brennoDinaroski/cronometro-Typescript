import React from 'react'
import style from './Botao.module.scss'
import { type } from 'os';

interface Props {
    texto: string,
    type? : "button" | "submit" | "reset" | undefined
    onClick? : () => void
}

function Botao ({texto, onClick, type} : Props) {
    return (
        <button onClick = {onClick} type = {type} className={style.botao}>
            {texto}
        </button>
    )
    
}

/* SAME BUTTON MADE IN CLASS COMPONENTS */
/*class Botao1 extends React.Component <{
    texto: string,
    type? : "button" | "submit" | "reset" | undefined
    onClick? : () => void
}>{
    render() {
        const { type = "button", onClick} = this.props
        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}*/

export default Botao;