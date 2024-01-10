import "../Styles/Navbar.css";
import ham from "../images/hamburger.svg";
const Navbar = () => {
  return (
    <>
      <div className="mainbox">
        <div className="box"></div>
        <div className="ham">
          <img src={ham} alt="ham" />
        </div>
        <div className="nav-box">
          <div className="home">
            <div className="text-wrapper">Home</div>
          </div>
          <div className="text-wrapper">About Us</div>
          <div className="text-wrapper">Work</div>
          <div className="text-wrapper">Services</div>
          <div className="text-wrapper">Clients</div>
          <div className="text-wrapper">Team</div>
          <div className="text-wrapper">Contact Us</div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
