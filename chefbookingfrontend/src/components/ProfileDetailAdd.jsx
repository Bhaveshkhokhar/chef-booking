import { useRef, useState } from "react";
import styles from "./ProfileDetailAdd.module.css";
import {
  FaUser,
  FaEnvelope,
  FaHome,
  FaTransgender,
  FaBirthdayCake,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const ProfileDetailAdd = () => {
  const { name } = useParams();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const Name = useRef();
  const image = useRef();
  const Email = useRef();
  const Address = useRef();
  const Birthdate = useRef();
  const Gender = useRef();

  // Handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  return (
    <div className="container py-5 ">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6  ">
          <form
            className="card shadow-sm p-4 rounded-5"
            onSubmit={handleSubmit}
            style={{ background: "#C4A484" }}
          >
            <div className="d-flex flex-column align-items-center mb-3">
              <img
                src="/assets/defaultpic.jpg"
                alt={name}
                className={`rounded-circle mb-3 ${styles.profileImage}`}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={handleImageClick}
                title="Click to change profile picture"
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <small className="text-white-50" style={{ fontSize: "0.9rem" }}>
                Click image to upload new photo
              </small>
            </div>

            {/* ...rest of your form fields... */}

            {/* ...rest of your form fields remain unchanged... */}
            {/* (Keep all your other fields as before) */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaUser />
                </span>
                <input
                  className="form-control"
                  name="name"
                  defaultValue={name}
                  ref={Name}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>
                <input
                  className="form-control"
                  name="email"
                  ref={Email}
                  type="email"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaHome />
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  ref={Address}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaTransgender />
                </span>
                <select className="form-select" name="gender" ref={Gender}>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Birthday</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaBirthdayCake />
                </span>
                <input
                  className="form-control"
                  name="birthday"
                  type="date"
                  ref={Birthdate}
                />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className={`${styles["Button"]}  mb-3`}>
                submit Profile
              </button>

              <button
                type="button"
                className={`${styles["Button"]}  mb-3 `}
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                skip
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ProfileDetailAdd;
