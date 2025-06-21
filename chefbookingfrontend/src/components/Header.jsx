import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext, useState } from "react";
import { authContext } from "../store/Logininfostore";

const Header = () => {
  const { loginstate } = useContext(authContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles["grad"]} p-3 border-bottom`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              width="50px"
              height="50px"
              src="/assets/Chefwalelogo.png"
              alt="ChefWale"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link px-3">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/chefs/All Chefs" className="nav-link px-3">
                  All Chefs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link px-3">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link px-3">
                  About Us
                </Link>
              </li>
            </ul>
            {/* Hamburger menu (mobile): show below links */}
            {/* Hamburger menu (mobile): show below links, left-aligned */}
            <div className="w-100 d-lg-none d-block mt-3 ps-3">
              {!loginstate ? (
                <div className="d-flex flex-column gap-2">
                  <button
                    type="button"
                    className={`btn ${styles["button"]} w-75`}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className={`btn ${styles["button"]} w-75`}
                    onClick={() => navigate("/sign-up")}
                  >
                    Sign-up
                  </button>
                </div>
              ) : (
                <div className="dropdown">
                  <a
                    href="#"
                    className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt="mdo"
                      width="32"
                      height="32"
                      className="rounded-circle"
                    />
                  </a>
                  <ul className="dropdown-menu text-small">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/yourbooking">
                        Your Booking
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => navigate("/")}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Desktop: keep in top bar */}
            <div className="d-none d-lg-flex align-items-center ms-auto">
              {!loginstate ? (
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className={`btn ${styles["button"]}`}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className={`btn ${styles["button"]}`}
                    onClick={() => navigate("/sign-up")}
                  >
                    Sign-up
                  </button>
                </div>
              ) : (
                <div className="dropdown text-end">
                  <a
                    href="#"
                    className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt="mdo"
                      width="32"
                      height="32"
                      className="rounded-circle"
                    />
                  </a>
                  <ul className="dropdown-menu text-small">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/yourbooking">
                        Your Booking
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => navigate("/")}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
