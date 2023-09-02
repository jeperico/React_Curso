import ItemList from "./ItemList"
import './List.css'

function List(){

    return(
        <div id="listContainer">
            <h2>Lista</h2>
            <ul id="listStyle">
                <ItemList marca='Ferrari' ano_lancamento={1938} cor='Vermelh' />
                <ItemList marca='Renault' ano_lancamento={2001} />
                <ItemList ano_lancamento={1917} cor='Azul' />
                <ItemList marca='Honda' cor='Prata' />
            </ul>
        </div>
    )
}

export default List