import "./assets/css/Footer.css";
import { PageProps } from "./interfaces/page";
import GithubLogo from "./assets/images/github-mark-white.png";

export function Footer({ page, setPage }: PageProps): JSX.Element {
  return (
    <footer className="footer">
      <a className="item left" href="https://github.com/OneTachi/career_helpi">
        <img src={GithubLogo} alt="Github" className="github logo" />
      </a>
      <span className="item right">
        <h3 style={{ textDecorationLine: "underline" }}>Created By</h3>
        <p>Siddharth Lokula | Justin Burger | Christopher Rasquin</p>
      </span>
    </footer>
  );
}
