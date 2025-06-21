import { createContext, useState } from "react";

export const authContext = createContext({
  loginstate: Boolean,
  handleuserProfile: () => {},
});
const LogininfoContextProvider = ({ children }) => {
  const [loginstate, setlogin] = useState(false);
  const handleuserProfile = () => {
    setlogin(true);
  };
  return (
    <authContext.Provider value={{ loginstate, handleuserProfile }}>
      {children}
    </authContext.Provider>
  );
};
export default LogininfoContextProvider;
