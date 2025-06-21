
import  ChefProvider  from "./ChefdataStore";
import  ServiceProvider  from "./ServicedataStore";
// import { UserProvider } from "./UserdataStore";

const AppContextProvider = ({ children }) => {
  return (
    <ServiceProvider>
      <ChefProvider>
       
            {children}
        
      </ChefProvider>
    </ServiceProvider>
  );
};
export default AppContextProvider;