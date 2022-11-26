import Navigation from "@/components/Layout/includes/Navigation";

const Layout = ({ children }) => {
    return (<>
          <Navigation />
        <div className="container">
      
        {children}
        </div>
    </>);
}

export default Layout;