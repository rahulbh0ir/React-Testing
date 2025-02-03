import { Link , Outlet} from "react-router-dom";

function Layout() {
    return( 
        <>
        <nav>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <br></br>
         <Link to="/blogs">Blogs</Link>
         <Outlet/>
        </nav>
        </>
    )
}
export default Layout;