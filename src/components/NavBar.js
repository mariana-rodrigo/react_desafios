import './NavBar.css'
import './CartWidget.js'
import CartWidget from './CartWidget.js'
import {Link} from'react-router-dom'
import  { useCartContext} from './Context'



function NavBar() {
    const {  count } = useCartContext();
    if (count > 0){
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
        
        )
    } else {
        return(
            <nav>
                
                    <div className='nav'>
                        
                        <ul className="listaNav">
                            <li className="elementoListaNav"><Link to={'/'}>Todos</Link></li> 
                            <li className="elementoListaNav"><Link to={'/tortas'}> Tortas </Link></li>
                            <li className="elementoListaNav"> <Link to={'/pasteleria'}>Pastelería </Link></li>
                            
                            <li className="elementoListaNav cartwidgetOculto"><Link to={'/cart'}><CartWidget/>{count}</Link></li>
                            
                            
                        </ul>
                    </div>
                
            </nav>
        )
    }
}

export default NavBar;