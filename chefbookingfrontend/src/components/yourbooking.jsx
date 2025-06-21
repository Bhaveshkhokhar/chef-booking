import styles from "./yourbooking.module.css";

// Dummy booking data (replace with real data or fetch from API/context)
const bookings = [
  {
    chefName: "Kavita Nair",
    chefPic: "/assets/chef2.jpg",
    date: "2025-07-01",
    time: "7:00 PM",
    price: 2100,
    status: "Confirmed",
    speciality: "South Indian Platter"
  },
  {
    chefName: "Rahul Sharma",
    chefPic: "/assets/chef3.jpg",
    date: "2025-07-10",
    time: "1:00 PM",
    price: 1800,
    status: "Pending",
    speciality: "North Indian Cuisine"
  },
  {
    chefName: "Ananya Mehta",
    chefPic: "/assets/chef4.jpg",
    date: "2025-07-05",
    time: "8:00 PM",
    price: 2500,
    status: "Confirmed",
    speciality: "Fusion Desserts"
  },
  {
    chefName: "Imran Qureshi",
    chefPic: "/assets/chef5.jpg",
    date: "2025-07-12",
    time: "6:30 PM",
    price: 3000,
    status: "Cancelled",
    speciality: "Mughlai Delicacies"
  },
  {
    chefName: "Pooja Singh",
    chefPic: "/assets/chef6.jpg",
    date: "2025-07-15",
    time: "12:30 PM",
    price: 2200,
    status: "Confirmed",
    speciality: "Gujarati Thali"
  },
  {
    chefName: "Ajay Verma",
    chefPic: "/assets/chef7.jpg",
    date: "2025-07-08",
    time: "9:00 PM",
    price: 2700,
    status: "Pending",
    speciality: "Tandoori BBQ"
  },
  {
    chefName: "Nisha Yadav",
    chefPic: "/assets/chef8.jpg",
    date: "2025-07-20",
    time: "2:00 PM",
    price: 1950,
    status: "Confirmed",
    speciality: "Street Food Feast"
  },
  {
    chefName: "Arjun Pillai",
    chefPic: "/assets/chef9.jpg",
    date: "2025-07-17",
    time: "5:00 PM",
    price: 2800,
    status: "Confirmed",
    speciality: "Kerala Seafood"
  },
  {
    chefName: "Meera Joshi",
    chefPic: "/assets/chef10.jpg",
    date: "2025-07-22",
    time: "6:00 PM",
    price: 2300,
    status: "Pending",
    speciality: "Continental Buffet"
  },
  {
    chefName: "Rajeev Kapoor",
    chefPic: "/assets/chef11.jpg",
    date: "2025-07-25",
    time: "7:30 PM",
    price: 3200,
    status: "Confirmed",
    speciality: "Royal Rajasthani Spread"
  },
  {
    chefName: "Simran Dey",
    chefPic: "/assets/chef12.jpg",
    date: "2025-07-28",
    time: "1:00 PM",
    price: 2000,
    status: "Cancelled",
    speciality: "Bengali Sweets & Snacks"
  },
  {
    chefName: "Vikram Shetty",
    chefPic: "/assets/chef13.jpg",
    date: "2025-07-30",
    time: "8:30 PM",
    price: 2600,
    status: "Confirmed",
    speciality: "Coastal Konkan Cuisine"
  }
];



const sortedBookings = [...bookings].sort(
  (a, b) => new Date(a.date) - new Date(b.date)
);

const Yourbooking = () => {
  return (
    <div className={`container py-4 ${styles.bookingContainer}`}>
      <h2 className="mb-4 text-center">Your Chef Bookings</h2>
      {sortedBookings.length === 0 ? (
        <p className="text-center">No bookings found.</p>
      ) : (
        <div className="row justify-content-center">
          {sortedBookings.map((booking, idx) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={idx}>
              <div className={`card shadow-sm p-3 ${styles.bookingCard}`}>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={booking.chefPic}
                    alt={booking.chefName}
                    className={`rounded-circle me-3 ${styles.chefPic}`}
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                  />
                  <div>
                    <h5 className="mb-0">{booking.chefName}</h5>
                    <small className="text-muted">{booking.speciality}</small>
                  </div>
                </div>
                <div>
                  <p className="mb-1"><strong>Date:</strong> {booking.date}</p>
                  <p className="mb-1"><strong>Time:</strong> {booking.time}</p>
                  <p className="mb-1"><strong>Price:</strong> ₹{booking.price}</p>
                  <p className="mb-1">
                    <strong>Status:</strong>{" "}
                    <span style={{ color: booking.status === "Confirmed" ? "green" : "#b8860b" }}>
                      {booking.status}
                    </span>
                  </p>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button className={styles.Button}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Yourbooking;