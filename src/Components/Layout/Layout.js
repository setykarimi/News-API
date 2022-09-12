import Navigation from "./includes/Navigation";

const Layout = ({ children }) => {
    return (<>
        
        <div className="container">
        <Navigation />
        {children}
        </div>
    </>);
}

export default Layout;