import {useState} from 'react'
import Nome from './Nome'
import Saudacao from './Saudacao'

function StateLift(){

    const [name, useName] = useState()

    return(
        <div id="listContainer">
            <h2>State Lift</h2>
            <Nome state={useName} />
            {name}
            <Saudacao name={name} />
        </div>
    )
}

export default StateLift