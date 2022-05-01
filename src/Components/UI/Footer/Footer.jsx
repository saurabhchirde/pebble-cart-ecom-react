import { useTheme } from "../../../Context";
import "./Footer.css";

const Footer = () => {
  const { darkTheme } = useTheme();
  return (
    <>
      <footer className={darkTheme ? "" : "footer-light"}>
        <div className="footer-main-area">
          <div>
            <h1>Company</h1>
            <h2>About Us</h2>
            <h2>Careers</h2>
            <div className="footer-connect-icons">
              <a
                href="https://www.facebook.com/Saurabh123.chirde"
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/SaurabhChirde" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/saurabhchirde/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h1>Support</h1>
            <h2>Contact Us</h2>
            <h2>Your Account</h2>
          </div>
          <div>
            <h1>Where To Buy </h1>
            <h2>See Authorized Retailers</h2>
          </div>
        </div>
        <hr
          className={darkTheme ? "break-line" : "break-line break-line-light"}
        />
        <div className="footer-copyright-text">
          <h3>
            Designed & Develop by
            <a
              href="https://twitter.com/SaurabhChirde"
              target="_blank"
              className={darkTheme ? "copyright-text" : "copyright-text-light"}
            >
              Saurabh Chirde
            </a>
          </h3>
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
