import PropTypes from 'prop-types'

function ItemList({ marca, ano_lancamento, cor}){
    return(
        <li>
            {marca} - {ano_lancamento} - {cor}
        </li>
    )
}

ItemList.propTypes = {
    marca: PropTypes.string.isRequired ,
    ano_lancamento: PropTypes.number ,
    cor: PropTypes.string
}

ItemList.defaultProps ={
    marca: 'Null',
    ano_lancamento: 'NaN',
    cor: 'Invalid' 
}

export default ItemList