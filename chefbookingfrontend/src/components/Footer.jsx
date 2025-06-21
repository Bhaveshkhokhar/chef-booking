import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={`${styles["grad"]}`}>
        <div className="container">
          <footer className="py-5">
            <div className="container justify-content-center py-4 my-4 border-top">
              <div className="row gy-4">
                <div className="col-12 col-md-6 mb-2">
                  <a
                    href="/"
                    className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
                    aria-label="Bootstrap"
                  >
                    <img
                      width="150px"
                      height="150px"
                      src="/assets/Chefwalelogo.png"
                      alt="ChefWale"
                    />
                  </a>
                  <p className="text-body-secondary">
                    Discover the art of fine dining with a personal chef. Book
                    now for a gourmet experience in your own home. Exceptional
                    cuisine, just a reservation away
                  </p>
                </div>
                <div className="col-12 col-md-3">
                  <h5>SECTION</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        Home
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        All Chefs
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-3">
                  <h5>GET IN TOUCH</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">9968133855</li>
                    <li className="nav-item mb-2">
                      bhaveshkhokhar54@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center py-4 my-4 border-top gap-3">
              <p className="mb-0">© 2025 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex mb-0">
                <li className="ms-3">
                  <a
                    className="link-body-emphasis"
                    href="#"
                    aria-label="Instagram"
                  >
                    <svg className="bi" width="24" height="24">
                      <use xlinkHref="#instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    className="link-body-emphasis"
                    href="#"
                    aria-label="Facebook"
                  >
                    <svg
                      className="bi"
                      width="24"
                      height="24"
                      aria-hidden="true"
                    >
                      <use xlinkHref="#facebook"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Footer;
