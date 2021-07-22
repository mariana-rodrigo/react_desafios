import logo from '../imagenes/logo.png'
import  '../Header.css'
import {Link} from'react-router-dom'


function Header (){
    return(
        <div className='logo'>
            <Link to={'/'}><img src={logo} alt="logo" ></img></Link>        
        </div>
    )

}
export default Header