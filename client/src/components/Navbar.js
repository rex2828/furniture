import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { uiActions } from '../store/ui-slice';
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css';
import { logout } from '../store/login-slice';
const Navbar = ({ loggedin, user }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cartButtonHandler = () => {
        dispatch(uiActions.toggleCartVisibility())
    }

    const formButtonHandler = () => {
        navigate('/form')
    }

    const logoutHandler = () => {
        dispatch(logout())
    }


    return (
        <div className={classes.navbar}>
            <span className={classes.logo}><Link className={classes.link} to='/'>Furniture App</Link></span>
            {loggedin ? (<ul className={classes.list}>
                <li className={classes.listItem}>
                    <img src="https://sworna.com/wp-content/uploads/2020/07/pp.png" alt='avatar' className={classes.avatar} />
                </li>
                <li className={classes.listItem}>
                    {user.username}
                </li>
                <li className={classes.listItem} onClick={logoutHandler}>
                    Logout
                </li>
                <li className={classes.listItem}>
                    <button className={classes.navButton} type='button' onClick={formButtonHandler}>Contact</button>
                </li>
                <li className={classes.listItem}>
                    <button className={classes.navButton} type='button' onClick={cartButtonHandler}>Cart</button>
                </li>
            </ul>) :

                (<ul className={classes.list}>
                    <li className={classes.listItem}>
                        <Link className={classes.link} to='/login'>Login</Link>
                    </li>
                    <li className={classes.listItem}>
                        <button className={classes.navButton} type='button' onClick={cartButtonHandler}>Cart</button>
                    </li>
                </ul>)

            }
        </div>
    )
}

export default Navbar;