import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Booking.module.css";
const Booking = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 12,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <>
      <center>
        <h5>Booking slot</h5>
      </center>
      <form>
        <div style={{ padding: "0 10px", position: "relative" }}>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            keyBoardControl={true}
            itemClass={styles.carouselItem}
            removeArrowOnDeviceType={[
              "desktop",
              "tablet",
              "mobile",
              "superLargeDesktop",
            ]}
          >
            {[...Array(30)].map((_, index) => (
              <button key={index} className={`${styles["cardItem"]}`}>
                <pre>   Thu   </pre>
                <pre>{16 + index}</pre>
              </button>
            ))}
          </Carousel>
        </div>
      </form>
      <div style={{ padding: "0 10px", position: "relative" }}>
        <form>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            keyBoardControl={true}
            itemClass={styles.carouselItem}
            removeArrowOnDeviceType={[
              "desktop",
              "tablet",
              "mobile",
              "superLargeDesktop",
            ]}
          >
            {[...Array(30)].map((_, index) => (
              <div key={index} className={`${styles["cardItem"]}`}>
                <pre>7 AM</pre>
              </div>
            ))}
          </Carousel>
          <center>
            <button type="button" class="btn" style={{ background: "#C4A484" }}>
              Book now
            </button>
          </center>
        </form>
      </div>
    </>
  );
};
export default Booking;
