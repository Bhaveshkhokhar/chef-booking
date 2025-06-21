import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
const Signup = () => {
  const navigate = useNavigate();
  const handlesubmit=(event)=>{
    event.preventDefault();
    navigate("/editprofile");
  }
  return (
    <>
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
              <h1 class="fw-bold mb-0 fs-2">Sign up</h1>{" "}
            </div>{" "}
            <div class="modal-body p-5 pt-0">
              {" "}
              <form class="" onSubmit={(event)=>{ handlesubmit(event);}} >
                {" "}
                <div class="form-floating mb-3">
                  {" "}
                  <small class=" mb-3">
                    Please Sign up to booking now
                  </small>{" "}
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
                  {" "}
                  <input
                    type="password"
                    class="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                  />{" "}
                  <label for="floatingPassword">Create new Password</label>{" "}
                </div>{" "}
                <div class="form-floating mb-3">
                  {" "}
                  <input
                    type="password"
                    class="form-control rounded-3"
                    id="floatingPasswordC"
                    placeholder="confirmPassword"
                  />{" "}
                  <label for="floatingPasswordC">Confirm new Password</label>{" "}
                </div>{" "}
                <div class="form-check text-start my-3">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="remember-me"
                    id="checkDefault"
                  />{" "}
                  <label class="form-check-label" for="checkDefault">
                    Remember me
                  </label>{" "}
                </div>
                <button
                  onClick={() => navigate("/addDetail")}
                  class={`${styles["signup-pop-button"]} w-100 mb-2 btn btn-lg rounded-3`}
                  type="submit"
                  style={{ backgroundColor: "white", color: "#2c0600" }}
                >
                  Sign up
                </button>{" "}
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    class="text-primary underline cursor-pointer"
                  >
                    Login here
                  </Link>
                </p>
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};
export default Signup;
