import Navigation from "./includes/Navigation";

const Layout = ({ children }) => {
    return (<>
          <Navigation />
        <div className="container">
      
        {children}
        </div>
    </>);
}

export default Layout;