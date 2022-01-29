import { createContext, useState } from "react";
export const NevtrehContext = createContext({});
export const NevtrehContextPorvider = ({ children }) => {
  const [loginInput, setloginInput] = useState("");
  const [password, setpassword] = useState("");
  const [check, setcheck] = useState("");
  const [boginoo, setboginoo] = useState("");
  return (
    <NevtrehContext.Provider
      value={{
        loginInput,
        setloginInput,
        password,
        setpassword,
        check,
        setcheck,
        boginoo,
        setboginoo,
      }}
    >
      {children}
    </NevtrehContext.Provider>
  );
};
