import { Link, NavLink } from "react-router-dom";
import './nav.scss';
import { BsSearch } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi'
import { useAuth } from "@/provider/AuthProvider";
import { useState } from "react";

const Navigation = () => {
    const auth = useAuth();
    const [isShow, setIsShow] = useState("")
    return (
        <div className="nav-container">
            <nav className={`custom-nav ${isShow === true ? "open-menu" : ""}`}>
                <div className="custom-nav__logo">
                    <span className="logo">N</span>
                    <span className="logo-dec">TodayNews</span>
                </div>

                <div className="custom-nav__menu">
                    <div className="custom-nav__items">
                        <ul>
                            <li>
                                <NavLink to='/' className={(navData) => navData.isActive ? "active-link" : ""} >News</NavLink>
                            </li>

                            <li>
                                <NavLink to='/about' className={navData => navData.isActive ? "active-link" : ""}>About Us</NavLink>
                            </li>

                            <li>
                                <NavLink to='/contact' className={navData => navData.isActive ? "active-link" : ""}>Contact Us</NavLink>
                            </li>

                            {auth && <li><NavLink to='/news/add' className={navData => navData.isActive ? "active-link" : ""}>Add News</NavLink></li>}



                        </ul>
                    </div>

                    <div className="custom-nav__detail">
                        <div className="custom-nav__search-bar">
                            <BsSearch className="icon" />
                            <input placeholder="Search ..." />
                        </div>
                        <li>

                            <NavLink to={auth ? "/profile" : "/login"} className={navData => navData.isActive ? "active-link" : ""}>{auth ? "Profile" : "Login"}</NavLink>
                        </li>
                    </div>
                </div>

                <button className="toggle-menu" onClick={() => setIsShow(prevState => !prevState)}>
                    <HiMenuAlt3 />
                </button>

            </nav>
        </div>
    );
}

export default Navigation;