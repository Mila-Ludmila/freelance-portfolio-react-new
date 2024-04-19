import gitHubIcon from "./../../img/icons/github.svg";
import instagramIcon from "./../../img/icons/instagram.svg";
import linkedinIcon from "./../../img/icons/linkedin.svg";
import twitterIcon from "./../../img/icons/twitter.svg";
import vkIcon from "./../../img/icons/vk.svg";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vkIcon} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={instagramIcon} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={twitterIcon} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={gitHubIcon} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={linkedinIcon} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>
            © 2024&ensp;
               <a href="https://app.netlify.com/teams/lydmila-briczkaya/overview">
                 front-end Liudmula overview
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
