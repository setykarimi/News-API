import { Link } from "react-router-dom";
import './nav.scss';
import { BsSearch } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi'

const Navigation = () => {
    return (
        <nav className="custom-nav">
            <div className="custom-nav__logo">
                <span className="logo">N</span>
                <span className="logo-dec">TodayNews</span>
            </div>

            <div className="custom-nav__items">
                <ul>
                    <li>
                        <Link to='/'>News</Link>
                    </li>

                    <li>
                        <Link to='/'>Health</Link>
                    </li>

                    <li>
                        <Link to='/'>Polotics</Link>
                    </li>

                    <li>
                        <Link to='/'>Entertainment</Link>
                    </li>
                </ul>
            </div>

            <div className="custom-nav__search-bar">
                <BsSearch className="icon" />
                <input placeholder="Search ..." />
            </div>
            <button className="toggle-menu">
            <HiMenuAlt3 />
            </button>
        </nav>
    );
}

export default Navigation;