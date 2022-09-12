import { Link } from "react-router-dom";
import './nav.scss'

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
        </nav>
     );
}
 
export default Navigation;