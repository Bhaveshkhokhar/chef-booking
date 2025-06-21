import { useContext } from "react";
import { ServiceStore } from "../store/ServicedataStore";
import ServiceCard from "./Servicecard";

const Service = () => {
  const { service } = useContext(ServiceStore);
  const ser = service;
  return (
    <>
      <h2>Our Services</h2>
      <p>Simply browse through our extensive list of trusted chef</p>
      <div className="container">
        <div className="row">
          {ser.map((service, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={idx}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Service;
