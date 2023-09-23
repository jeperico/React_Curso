import {useState} from 'react'
import List from './List'

function Conditional2(){

    const list = ['React', 'Vue', 'Angular']

    return(
        <div className="DivContainer">
            <h2>Cadastre o seu e-mail:</h2>
            <List items={list} />
            <List items={[]} />
        </div>
    )
}

export default Conditional2