import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/assets/bgfood.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "50px 0",
        }}
      >
        <center>
          <h1 style={{ margin: "50px 0px 0px 0px", color: "white" }}>
            Contact us
          </h1>
          <div
            class="modal modal-sheet position-static d-block  p-4 py-md-5"
            tabindex="-1"
            role="dialog"
            id="modalSignin"
          >
            {" "}
            <div class="modal-dialog">
              {" "}
              <div
                class="modal-content rounded-4 shadow"
                style={{ backgroundColor: "#C4A484", color: "white" }}
              >
                {" "}
                <div class="modal-header p-5 pb-4 border-bottom-0">
                  {" "}
                  <h1 class="fw-bold mb-0 fs-2">
                    Fill out the form or Call us at +919968133855
                  </h1>{" "}
                </div>{" "}
                <div class="modal-body p-5 pt-0">
                  {" "}
                  <form class="">
                    {" "}
                    <div class="form-floating mb-3">
                      {" "}
                      <input
                        type="text"
                        class="form-control rounded-3"
                        id="name"
                        placeholder="name"
                      />{" "}
                      <label for="name">Name</label>{" "}
                    </div>{" "}
                    <div class="form-floating mb-3">
                      {" "}
                      <input
                        type="mobile"
                        maxLength="10"
                        class="form-control rounded-3"
                        id="mobile"
                        placeholder="Mobile"
                      />{" "}
                      <label for="mobile">Mobile</label>{" "}
                    </div>{" "}
                    <div class="form-floating mb-3">
                      {" "}
                      <input
                        type="email"
                        class="form-control rounded-3"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />{" "}
                      <label for="floatingInput">Email address</label>{" "}
                    </div>{" "}
                    <div class="form-floating mb-3">
                      <select
                        class="form-select rounded-3"
                        id="city"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled hidden></option>{" "}
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Pune">Pune</option>
                      </select>
                      <label for="city">City</label>
                    </div>
                    <div class="form-floating mb-3">
                      <textarea
                        class="form-control rounded-3"
                        placeholder="Write your message here"
                        id="message"
                        style={{ height: "150px" }}
                      ></textarea>
                      <label for="message">
                        Please write your message in detail.
                      </label>
                    </div>
                    <button
                      class={`${styles["login-pop-button"]} w-100 mb-2 btn btn-lg rounded-3`}
                      type="submit"
                      style={{ backgroundColor: "white", color: "#2c0600" }}
                    >
                      Login
                    </button>{" "}
                  </form>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </center>
      </div>
    </>
  );
};
export default Contact;
