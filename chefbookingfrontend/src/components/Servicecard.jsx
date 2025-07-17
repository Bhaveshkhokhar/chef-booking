import { Link } from "react-router-dom";
import styles from "./Servicecard.module.css";
const Servicecard = ({ service }) => {
  return (
    <>
      <Link to={`/chefs/${service.type}`} class={`btn ${styles["button"]}`}>
        <div
          class="card"
          style={{ maxWidth: "230px", background: "#C4A484",  }}
        >
          <img src={`http://localhost:3001${service.pic}`} class="card-img-top" alt={service.type} />
          <div class="card-body">
            <h5 class="card-title">{service.type}</h5>
            <p class="card-text">{service.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Servicecard;
