import "./style.css";
import gitHubDark from "./gitdark.svg";

const BtnGitHub = ({link}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline" 
    >
      <img 
        src={gitHubDark} 
        alt="Git Icon" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
