import style from "./Dashboard.module.css";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { bookingContext } from "../store/bookingStore";
import { ChefsStore } from "../store/ChefdataStore";
const Dashboard = () => {
  const { chefs } = useContext(ChefsStore);
  const noOfChef=chefs.length;
  const { bookings, cancelBooking } = useContext(bookingContext);
  const noOfBooking=bookings.length;
  const data = bookings.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <>
      <div style={{ margin: "5px" }}>
        <div className={style.boxes}>
          <Link to="/chefs" className={style.link}>
            <div className={style.data}>
              <img src="http://localhost:3001/pic_chef.jpeg" alt="Chef" />
              <span>{noOfChef} chefs</span>
            </div>
          </Link>
          <Link to="/bookings" className={style.link}>
            <div className={style.data}>
              <img src="http://localhost:3001/bookingpic.jpg" alt="Booking" />
              <span>{noOfBooking} Booking</span>
            </div>
          </Link>
          <Link to="/users" className={style.link}>
            <div className={style.data}>
              <img src="http://localhost:3001/defaultpic.jpg" alt="User" />
              <span>20 User</span>
            </div>
          </Link>
        </div>
        <div className={style.tableWrapper}>
          <table className={style.table}>
            <thead>
              <tr border="">
                <th colSpan="5">Latest 10 Booking</th>
              </tr>
              <tr>
                <td colSpan="5" style={{ padding: 0 }}>
                  <hr
                    style={{
                      margin: 0,
                      border: "none",
                      borderTop: "2px solid #e0e7ff",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">User name</th>
                <th scope="col">Chef</th>
                <th scope="col">Fees</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 10).map((booking, index) => (
                <tr key={index}>
                  <th scope="row">{booking.date}</th>
                  <td>
                    <img
                      width="30px"
                      height="30px"
                      style={{ borderRadius: "30px", marginRight: "2px" }}
                      src={`http://localhost:3001${booking.user.profileImage}`}
                      alt="User"
                    ></img>
                    <span>{booking.user.name}</span>
                  </td>
                  <td>
                    <img
                      width="30px"
                      height="30px"
                      style={{ borderRadius: "30px", marginRight: "2px" }}
                      src={`http://localhost:3001${booking.chef.profileImage}`}
                      alt="Chef"
                    ></img>
                    <span>{booking.chef.name}</span>
                  </td>
                  <td>{booking.fees}</td>
                  <td>
                    {booking.status === "pending" && (
                      <button
                        style={{
                          border: "none",
                          background: "white",
                          color: "red",
                        }}
                        onClick={() => {cancelBooking(booking.id)}}
                      >
                        <ImCancelCircle />
                      </button>
                    )}
                    {booking.status === "cancelled" && <span>Cancelled</span>}
                    {booking.status === "Completed" && <span>Complete</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
