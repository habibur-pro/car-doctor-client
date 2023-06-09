import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/bookings'>bookings</Link></li>
        <li><Link to='/'>Blog</Link></li>
        <li><Link to='/'>Contact</Link></li>


    </>

    const handleLogOut = () => {
        logout()

    }

    return (
        <div className="navbar bg-base-100 h-24    ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        {navLinks}
                    </ul>
                </div>
                <a className=" normal-case text-xl">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className="btn btn-outline btn-primary hover:text-white">Appointment</button>
                {
                    user ? <button onClick={handleLogOut} className="btn btn-outline btn-primary hover:text-white">Logout</button>
                        :
                        <Link to='/signin'><button className="btn btn-outline btn-primary hover:text-white">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;