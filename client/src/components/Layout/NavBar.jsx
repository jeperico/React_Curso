import { Link } from 'react-router-dom'
import './NavBar.css'


function NavBar(){

    return(
        <nav className='list'>
            <li className='item'><Link to="/">Home</Link></li>
            <li className='item'><Link to="/empresa">Empresa</Link></li>
            <li className='item'><Link to="/contate">Contate</Link></li>
        </nav>
    )
}

export default NavBar