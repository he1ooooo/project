import { useContext } from "react";
import { NevtrehContext } from "../constext/nevtreh";
import "../scss/login.scss";
const Password1 = ({checkp}) => {
    const {check} = useContext(NevtrehContext)
  return (
    <div>
      Нууц үгээ давтна уу?
      <div className="tsahimhayg fontn"></div>
      <input
        className="saaral"
        type="password"
        placeholder="••••••••••"
        onChange={(pass1) => {
          checkp(pass1.target.value);
        }}

      ></input>
    </div>
  );
};
export default Password1;
