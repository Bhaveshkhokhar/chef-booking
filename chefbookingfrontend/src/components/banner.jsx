import { useContext, useEffect, useState } from "react";
import styles from "./banner.module.css";
import { authContext } from "../store/Logininfostore";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { loginstate } = useContext(authContext);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h2> Booking Now</h2>
          <br />
          <h2 style={{ margin: "0px 0px 10px 0px" }}>With 50+ Trusted Chef</h2>
          <button
            className={styles.bannerButton}
            onClick={() => {
              loginstate ? navigate("/chefs/All Chefs") : navigate("/sign-up");
            }}
          >
            {loginstate ? "book now" : "Create account"}
          </button>
        </div>
        <div className={styles.bannerImage}>
          <img
            width="700px"
            height="700px"
            src={isMobile ? "/assets/PIC1.jpg" : "/assets/chefpic.png"}
            alt="Chef"
          />
        </div>
      </div>
    </>
  );
};
export default Banner;
