import "./navbar.css";
import livingRoom from "../../assets/living-room.png"; // Path relatif ke Hero.jsx

const Navbar = () => {
  console.log("Navbar loaded");

  return (
    <div className="bg-image">
      <img src={livingRoom} alt="livingRoom" className="livingRoom" />
      <div className="navbar">
        <span className="logo">FurniShop</span>
        <div className="navItems">
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </ul>
        </div>
      </div>
      <div className="hero-container">
        <h2 className="main-text">Creative Home Simpify your Furniture</h2>
        <p className="sub-text">Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto</p>
        <button className="btn-shop">Shop Now</button>
        {/* <img src={livingRoom} alt="livingRoom" className="livingRoom" /> */}
      </div>
      <div className="info-container">
        <div className="info-box">
          <h2 className="info-box-h2">7</h2>
          <p className="info-box-text">Year Experience</p>
        </div>
        <div className="info-box">
          <h2 className="info-box-h2">2</h2>
          <p className="info-box-text">Opened in the country</p>
        </div>
        <div className="info-box">
          <h2 className="info-box-h2">10k+</h2>
          <p className="info-box-text">Furniture sold</p>
        </div>
        <div className="info-box">
          <h2 className="info-box-h2">260+</h2>
          <p className="info-box-text">Variant Furniture</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
