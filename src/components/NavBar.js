import './NavBar.css'
import './CartWidget.js'
import CartWidget from './CartWidget.js'
import {Link} from'react-router-dom'
import  {CartContext, useCartContext} from './Context'
import React, {useContext} from 'react'


function NavBar() {
    const {  count } = useCartContext();
    
    return (
        
        <nav>
            
                <div className='nav'>
                    
                    <ul className="listaNav">
                        <li className="elementoListaNav"><Link to={'/'}>Todos</Link></li> 
                        <li className="elementoListaNav"><Link to={'/tortas'}> Tortas </Link></li>
                        <li className="elementoListaNav"> <Link to={'/pasteleria'}>Pastelería </Link></li>
                        
                        <li className="elementoListaNav"><Link to={'/cart'}><CartWidget/>{count}</Link></li>
                        
                        
                    </ul>
                </div>
            
        </nav>
    
    );
}

export default NavBar;