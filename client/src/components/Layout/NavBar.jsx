import { Link } from 'react-router-dom'
import './NavBar.css'


function NavBar(){

    return(
        <nav className='list'>
            <ul className='list'>
                <li className='item'><Link to="/">Home</Link></li>
            </ul>
            <ul className='list'>
                <li className='item'><Link to="/empresa">Empresa</Link></li>
            </ul>
            <ul className='list'>
                <li className='item'><Link to="/contate">Contate</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar