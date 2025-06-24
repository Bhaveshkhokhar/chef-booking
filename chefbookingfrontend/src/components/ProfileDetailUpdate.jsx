import { useRef, useState } from "react";
import styles from "./ProfileDetailUpdate.module.css";
import {
  FaUser,
  FaUserTag,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaTransgender,
  FaBirthdayCake,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const initialUser = {
  image: "/assets/user.png",
  name: "John Doe",
  address: "123 Main Street, Mumbai, India",
  phone: "+91 9876543210",
  email: "john.doe@example.com",
  userId: "user12345",
  gender: "Male",
  birthday: "1990-05-15",
};

const ProfileDetailUpdate = () => {
  const [user, setUser] = useState(initialUser);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

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
                  value={user.name}
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
                  value={user.email}
                  required
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
                  className="form-control"
                  name="address"
                  value={user.address}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaTransgender />
                </span>
                <select
                  className="form-select"
                  name="gender"
                  value={user.gender}
                  required
                >
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
                  value={user.birthday}
                  type="date"
                  required
                />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className={`${styles["Button"]}  mb-3`}>
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ProfileDetailUpdate;
