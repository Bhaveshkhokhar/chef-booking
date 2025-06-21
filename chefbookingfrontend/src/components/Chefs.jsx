import Chefcard from "./Chefcard";

const Chefs = ({ type, chefs }) => {
  return (
    <>
      <div style={{ margin: "px 0px 0px 10px" }} class="row ">
        {chefs.map(
          (chef) =>
            (chef.type === type || type == "All Chefs") && (
              <div class="col justtify-content-start">
                <Chefcard chef={chef} />
              </div>
            )
        )}
      </div>
    </>
  );
};
export default Chefs;
