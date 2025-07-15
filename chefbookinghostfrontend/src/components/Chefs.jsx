import Chefcard from "./Chefcard";
import { useContext } from "react";
import { ChefsStore } from "../store/ChefdataStore";
import styles from "./Chefs.module.css";
const Chefs = () => {
  const { chefs } = useContext(ChefsStore);

  return (
    <>
      <div className={`${styles["page"]}`}>
        <div style={{ margin: "10px 30px" }} className={`${styles["cantainer"]}`}>
          {chefs.map((chef) => (
            <div key={chef.id}>
              <Chefcard chef={chef} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Chefs;
