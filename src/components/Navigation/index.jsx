import { Link } from "react-router-dom"
import style from './navigation.module.css'

export const NavigationBar = () => {
    return(
        <nav className={style.navigationBar}>
            <Link to='/'>Home</Link>
            <Link to= 'noticias'>Notícias</Link>
        </nav>
    )
} 