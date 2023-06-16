import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
const Layout = () => {
  return (
    <>
      <nav className="conteiner-header ">
        <ul className="hiders20">
          <li>
          <Link to="/">Home</Link>
           
          </li>
          <li>
            <Link to="/Userlist">Userlist</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
          <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>

      {/* <Outlet /> */}
    </>
  )
};

export default Layout;