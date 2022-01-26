import { createContext, useState } from "react";
export const NevtrehContext = createContext(null);
export const NevtrehContextPorvider = ({ children }) => {
  const [loginInput, setloginInput] = useState("");
  const [password, setpassword] = useState("");
  const [check, setcheck] = useState("");
return (
  <NevtrehContext.Provider
    value={{
      loginInput,
      setloginInput,
      password,
      setpassword,
      check,
      setcheck,
    }}
  >
    {children}
  </NevtrehContext.Provider>
 );
};
