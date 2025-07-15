import styles from "./Chefcard.module.css";
import { Link } from "react-router-dom";
const Chefcard = ({ chef }) => {
  const filledStars = Math.floor(chef.rating);
  const hasHalfStar =
    chef.rating - filledStars >= 0.25 && chef.rating - filledStars < 0.75;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
  return (
    <>
      <Link
        to={`/chef/${chef.id}`}
        class={`btn ${styles["button"]}`}
        style={{ padding: "0px" }}
      >
        <div
          class="card"
          style={{
            width: "200px",
            height: "350px",
            background: "#C4A484",
            margin: "10px",
          }}
        >
          <img
            src={`http://localhost:3001${chef.pic}`}
            class="card-img-top"
            alt={chef.name}
          />
          <div class="card-body" style={{ textAlign: "left" }}>
            <h6 class="card-title">{chef.name}</h6>
            <p class="card-text">
              <p style={{ margin: "2px" }}>speciality: {chef.speciality}</p>
              <p style={{ margin: "2px" }}>service: {chef.type}</p>
              <p style={{ margin: "2px" }}>
                {"★".repeat(filledStars)}
                {hasHalfStar && "⯪"}
                {/* or use ⯪, or 🌓 for half-filled simulation */}
                {"☆".repeat(emptyStars)}
                <span className="text-muted small"> {chef.rating}</span>
              </p>
              <li class={`${chef.available ? styles["green"] : styles["red"]}`}>
                {chef.available ? "available" : "not available"}
              </li>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Chefcard;
