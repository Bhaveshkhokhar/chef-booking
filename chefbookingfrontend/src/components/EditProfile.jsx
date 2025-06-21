import { useRef, useState } from "react";
import styles from "./EditProfile.module.css";
import { FaUser, FaUserTag, FaEnvelope, FaPhone, FaHome, FaTransgender, FaBirthdayCake } from "react-icons/fa";

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

const EditProfile = () => {
  const [user, setUser] = useState(initialUser);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <form
            className="card shadow-sm p-4"
            onSubmit={handleSubmit}
            style={{ background: "#C4A484" }}
          >
            <div className="d-flex flex-column align-items-center mb-3">
              <img
                src={user.image}
                alt={user.name}
                className={`rounded-circle mb-3 ${styles.profileImage}`}
                style={{ width: "100px", height: "100px", objectFit: "cover", cursor: "pointer" }}
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
            <div className="mb-3">
              <label className="form-label">User ID</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaUserTag />
                </span>
                <input
                  className="form-control"
                  name="userId"
                  value={user.userId}
                  onChange={handleChange}
                  disabled
                />
              </div>
            </div>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  required
                  type="email"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaPhone />
                </span>
                <input
                  className="form-control"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  required
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  type="date"
                  required
                />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className={`${styles["Button"]}  mb-3`}>
                Update it
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;