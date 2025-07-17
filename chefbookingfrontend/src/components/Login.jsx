import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useContext, useRef } from "react";
import { authContext } from "../store/Logininfostore";
import { FaUser, FaLock } from "react-icons/fa";


const Login = () => {
  const { handleuserProfile } = useContext(authContext);
  const Number = useRef();
  const Password = useRef();
  const navigate = useNavigate();
  const handlelogin = (event) => {
    // validate  number
    event.preventDefault();
    const isNumber = /^[0-9]+$/.test(Number.current.value.trim());

    if (!isNumber || Number.current.value.length !== 10) {
      event.preventDefault();
      alert("please enter a valid mobile number");
      Number.current.focus();
      return;
    }

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Number: Number.current.value,
        Password: Password.current.value,
      }),
      credentials: "include", // ✅ Send cookies with request
    })
      .then(async (res) => {
        const data = await res.json();
        
        if (!res.ok) {
          // Handle known status codes
          if (res.status === 401) {
            alert("Invalid credentials, please try again.");
            return null;
          }
          if (res.status === 500) {
            alert("Internal server error. Please try again later.");
            return null;
          }

          // Unknown error
          throw new Error("Login failed with status " + res.status);
        }

        return data;
      })
      .then((data) => {
        if (!data) return; // Already handled in previous step

        if (data.status === "success") {
          // Clear inputs
          Number.current.value = "";
          Password.current.value = "";

          // Update UI
          handleuserProfile(true);
          navigate("/");
          alert("Login successful!");
        } else {
          // Fallback error (in case backend sends status 200 with fail)
          alert(data.message || "Login failed unexpectedly.");
        }
      })
      .catch((err) => {
        console.error("Login error:", err.message);
        alert("An error occurred during login. Please try again.");
      });
  };
  return (
    <>
    
      <div
        className="modal modal-sheet position-static d-block  p-4 py-md-5"
        tabIndex={-1}
        role="dialog"
        id="modalSignin"
         
      >
        {" "}
        <div className="modal-dialog">
          {" "}
          <div
            className="modal-content rounded-5 shadow"
            style={{ backgroundColor: "#C4A484", color: "white" }}
          >
            <div className="w-100 d-flex justify-content-center mt-4 mb-0 ">
              <img
                src="/assets/Chefwalelogo.png"
                alt="ChefWale Logo"
                style={{ width: "90px", height: "90px", objectFit: "contain" }}
              />
            </div>
            {" "}
            <div className="modal-header p-2 pb-4 border-bottom-0  justify-content-center mt-0">
              {" "}
              <h1 className="fw-bold mb-0 fs-2">Login</h1>{" "}
            </div>{" "}
            <div className="modal-body p-5 pt-0">
              {" "}
              <form
                className=""
                onSubmit={(event) => {
                  handlelogin(event);
                }}
              >
                {" "}
                <div className="form-floating mb-3  ">
                  {" "}
                  <div className="text-center">
                  <small className=" mb-3 ">Please Log in to booking now</small>{" "}
                  </div>
                </div>{" "}
                <div className="form-floating mb-3">
                  {" "}
                  <input
                    ref={Number}
                    type="text"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="mobile number"
                  />{" "}
                  <label htmlFor="floatingInput">Mobile number</label>{" "}
                </div>{" "}
                <div className="form-floating mb-3">
                  {" "}
                  <input
                    ref={Password}
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                  />{" "}
                  <label htmlFor="floatingPassword">Password</label>{" "}
                </div>{" "}
                <div className="form-check text-start my-3">
                  {" "}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="remember-me"
                    id="checkDefault"
                  />{" "}
                  <label className="form-check-label" htmlFor="checkDefault">
                    Remember me
                  </label>{" "}
                </div>
                <button
                  className={`${styles["login-pop-button"]} w-100 mb-2 btn btn-lg rounded-3`}
                  type="submit"
                  style={{ backgroundColor: "white", color: "#2c0600" }}
                >
                  Login
                </button>{" "}
                <p>
                  Create an new account?{" "}
                  <Link
                    to="/sign-up"
                    className="text-primary underline cursor-pointer"
                    style={{color:"c4a484"}}
                  >
                    Sign up here
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
export default Login;
