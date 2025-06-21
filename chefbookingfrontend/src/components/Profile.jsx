import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  // Dummy user data (replace with real data or props/context)
  const user = {
    image: "/assets/user.png",
    name: "John Doe",
    address: "123 Main Street, Mumbai, India",
    phone: "+91 9876543210",
    email: "john.doe@example.com",
    userId: "user12345",
    gender: "Male",
    birthday: "1990-05-15",
  };

  const navigate = useNavigate();
  return (
    <div className={`container py-5 ${styles.profileContainer}`}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className={`card shadow-sm p-4 ${styles.profileCard}`}>
            <div className="d-flex flex-column align-items-center">
              <img
                src={user.image}
                alt={user.name}
                className={`rounded-circle mb-3 ${styles.profileImage}`}
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h3 className="mb-2">{user.name}</h3>
              <hr
                style={{
                  width: "100%",
                  borderTop: "2px solid #fff",
                  margin: "0 0 1rem 0",
                }}
              />
              <div className="w-100 mt-3">
                <p>
                  <strong>User ID:</strong> {user.userId}
                </p>
                <p
                  className="mt-4 mb-1"
                  style={{
                    fontWeight: "bold",
                    color: "#6c4f27",
                    letterSpacing: "1px",
                  }}
                >
                  Contact Info :
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                  <strong>Address:</strong> {user.address}
                </p>
                <p
                  className="mt-4 mb-1"
                  style={{
                    fontWeight: "bold",
                    color: "#6c4f27",
                    letterSpacing: "1px",
                  }}
                >
                  Basic Info :
                </p>
                <p>
                  <strong>Birthday:</strong> {user.birthday}
                </p>
                <p>
                  <strong>Gender:</strong> {user.gender}
                </p>
              </div>
              <button
                type="button"
                className={`${styles["Button"]}  mb-3`}
                onClick={()=>{navigate("/editprofile");}}

                // onClick={() => ...} // Add your edit handler here
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
