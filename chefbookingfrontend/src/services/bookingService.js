export const getBookingData = async (signal, handleuserProfile) => {
  try {
    const response = await fetch("http://localhost:3001/getYourBookings", {
      signal,
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 401) {
        handleuserProfile(false);
        alert(data.message);
        return;
      }
      if (response.status === 404) {
        handleuserProfile(false);
        alert(data.message);
        return;
      }
      if (response.status === 500) {
        alert(data.message);
        return;
      }
      throw new Error("Failed to fetch userBookingdata");
    }
    console.log(data.userBookingData);
    return mapServerBookingToLocalBooking(data.userBookingData);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error("Fetch error:", err);
    }
  }
};
export const mapServerBookingToLocalBooking = (serverBooking) => {
  return serverBooking.map((booking) => {
    return {
      booking_id: booking._id,
      chefDetail: booking.chef_id,
      date: booking.date,
      time: booking.time,
      price: booking.totalPrice,
      paid: booking.paid,
      address: booking.Address,
      bookedAt: booking.bookedAt.slice(0, 10),
      modeOfPayment: booking.modeOfPayment,
    };
  });
};
export const cancelBooking = async (id, handleuserProfile, dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/cancelBooking", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 401) {
        handleuserProfile(false);
        alert(data.message);
        return;
      }
      if (response.status === 404) {
        alert(data.message);
        const action = {
          type: "delete",
          payload: {
            id: data.id,
          },
        };
        dispatch(action);
        return;
      }
      if (response.status === 500) {
        alert(data.message);
        return;
      }
      throw new Error("Failed to cancel Booking");
    }
    return mapServerBookingHistoryToLocalBookingHistory(
      data.cancelledBooking,
      data.id
    );
  } catch (err) {
    console.error("Fetch error:", err);
  }
};
const mapServerBookingHistoryToLocalBookingHistory = (
  serverBookingHistory,
  id
) => {
  return {
    booking_id: id,
    bookinghistory_id: serverBookingHistory._id,
    chefDetail: serverBookingHistory.chef_id,
    date: serverBookingHistory.date,
    time: serverBookingHistory.time,
    price: serverBookingHistory.totalPrice,
    address: serverBookingHistory.Address,
    bookedAt: serverBookingHistory.bookedAt.slice(0, 10),
    modeOfPayment: serverBookingHistory.modeOfPayment,
    status: serverBookingHistory.status,
  };
};
