import logo from '../assets/logo.png'
import './components.css'
import {useNavigate} from 'react-router-dom'
// import {Link} from 'react-router-dom'
function Header(){

    const navigate = useNavigate()
    return(
        <div className="header">
            <div className='wrapper'>
                <div className="logo">
                        <img src={logo} onClick={()=>(navigate('/'))} alt="" />
                </div>
                <nav >
                   <a onClick={()=>(navigate('/explore/movie'))}>movie</a>
                   <a onClick={()=>(navigate('/explore/tv'))}>tv</a>
                </nav>
            </div>
        </div>
    )
}

export default Header