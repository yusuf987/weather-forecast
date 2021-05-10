import logo from '../../images/logo192.png';

function Header() {
    return (
        <div className="header" >
         {/* Main Logo  */}
        <img className="m10" src={logo} height="60" alt="weather-logo" />
         {/* Main Heading */}
        <span> weather forecast</span>
      </div>
        );
  }
  
  export default Header;
  