import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo-icons">
          <img
            src="./images/white-full-logo.webp"
            alt=""
            className="footer-logo"
          />
          <div className="icons">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-discord"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Membership</li>o
            <li>Pay Later</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
        <p className="footer-text">
          Copyright &copy; 2024 EarthOne. All Rights Reserved. Designed by
          Kaushik Jaiswal
        </p>
      </div>
    </>
  );
}

export default Footer;
