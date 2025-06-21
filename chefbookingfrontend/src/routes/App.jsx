import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogininfoContextProvider from "../store/Logininfostore";
import AppContextProvider from "../store/contextProviderWrapper";
const App = () => {
  console.log("app");
  return (
    <LogininfoContextProvider>
      <Header />
      <AppContextProvider>
        <Outlet />
      </AppContextProvider>
      <Footer />
    </LogininfoContextProvider>
  );
};
export default App;
