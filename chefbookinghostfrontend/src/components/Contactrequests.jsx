import { useContext } from "react";
import ContactRequestCard from "./ContactRequestCard";
import { requestContext } from "../store/requestStore";
import styles from "./Contactrequests.module.css"
const ContactRequest = () => {
  const { requests } = useContext(requestContext);
  return (
    <div className={`${styles["contactRequestsContainer"]}`}>
      {requests.map((req) => (
        <ContactRequestCard key={req.requestid} request={req} />
      ))}
    </div>
  );
};
export default ContactRequest;