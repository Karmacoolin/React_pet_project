import logoPhoto from '../../assets/img/react.png'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
const Header = (props) => {

  return <header className={s.header}>
    <img src= {logoPhoto} alt="for sell"></img>

    <div className={s.loginBlock}>

      {props.isAuth
        ? <div> {props.login} - <button onClick={props.logout}>Logout</button> </div>
        : <NavLink to={'/login'}>Login</NavLink>}

    </div>
    <div>{props.email}</div>
  </header>
}

export default Header;