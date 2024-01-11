import style from './Lista.module.scss'
import Item from './Item'
import {ITarefa} from '../../types/tarefa'

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export function Lista({ tarefas, selecionaTarefa } : Props ) {  
    return (    
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>            
            <ul>
                {tarefas.map((item) => (
                       <Item 
                            selecionaTarefa = {selecionaTarefa}
                            key= {item.id}
                            /* tarefa = {item.tarefa}
                            tempo = {item.tempo} */
                            {...item}
                       /> 
                ))}
            </ul>            
        </aside>
    )
}

