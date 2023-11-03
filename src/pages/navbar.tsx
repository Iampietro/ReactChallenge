import { Link } from "react-router-dom";

import Logout from './Logout/index';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end', padding: '15px', boxShadow: '0px 0.5px 2px black', backgroundColor: 'white' }}>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'unset', marginRight: '10px' }} >Home</Link>
      <Logout/>
    </nav>
  );
};

export default NavBar;