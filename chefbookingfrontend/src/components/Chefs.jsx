import Chefcard from "./Chefcard";
import styles from "./Chefs.module.css"
const Chefs = ({ type, chefs }) => {
  return (
    <>
      <div style={{ margin: "0px 0px 0px 10px" }} className={`${styles["cantainer"]}`}>
        {chefs.map(
          (chef) =>
            (chef.type === type || type == "All Chefs") && (
              <div  key={chef.id} class="col justtify-content-start">
                <Chefcard chef={chef} />
              </div>
            )
        )}
      </div>
    </>
  );
};
export default Chefs;
