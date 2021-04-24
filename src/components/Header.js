
import logo from '../images/logo192.png';

function Header() {
    return (
        <div className="header" >
        <img className="m10" src={logo} height="60" alt="weather-logo" />
        <span> weather forecast</span>
      </div>
        );
  }
  
  export default Header;
  