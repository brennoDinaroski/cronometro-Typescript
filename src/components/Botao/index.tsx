import React from 'react'
import style from './Botao.module.scss'
import { type } from 'os';

class Botao extends React.Component <{
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
}

export default Botao;