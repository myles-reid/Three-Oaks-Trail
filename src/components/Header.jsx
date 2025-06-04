import Nav from './Nav';
import logo from '../img/favicon.png';

function Header(props) {
  return (
    <header>
      <div className="container header-wrapper">
        <div className="flex header-title">
          <div className="logo">
            <img src={logo} alt="logo" height="50px" width="50px"></img>
          </div>
          <h2>Three Oaks Trail</h2>
        </div>
        <Nav navLinks={props.navLinks}/>
      </div>
    </header>
  );
}

export default Header;