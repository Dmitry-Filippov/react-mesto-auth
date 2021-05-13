import { Link } from "react-router-dom";

function Header({ headerEmail, path, linkText, isLoggedIn, handleLinkClick }) {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="logo"></div>
        <div className="header__text">
          {isLoggedIn && <p className="header__email">{headerEmail}</p>}
          <div>
            <Link className="header__link" to={path} onClick={handleLinkClick}>
              {linkText}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
