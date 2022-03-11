const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-main-area">
          <div>
            <h1>Company</h1>
            <a>
              <h2>About Us</h2>
            </a>
            <a>
              <h2>Careers</h2>
            </a>
            <div className="footer-connect-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div>
            <h1>Support</h1>
            <a>
              <h2>Contact Us</h2>
            </a>
            <a>
              <h2>Your Account</h2>
            </a>
          </div>
          <div>
            <h1>Where To Buy </h1>
            <a>
              <h2>See Authorized Retailers</h2>
            </a>
          </div>
        </div>
        <hr className="break-line" />
        <div className="footer-copyright-text">
          <h3>© 2022 Pebble Cart. All right reserved</h3>
          <div className="flex-row">
            <h2>Privacy Policy</h2>
            <h2>Terms & Conditions</h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
