import { useContext } from "react";
import { NevtrehContext } from "../constext/nevtreh";
import "../scss/login.scss";
const Password = ({ funcp }) => {
  const { password } = useContext(NevtrehContext);
  return (
    <div>
      Нууц үг
      <div className="tsahimhayg fontn"></div>
      <input
        className="saaral"
        type="password"
        placeholder="••••••••••"
        onChange={(pass) => {
          funcp(pass.target.value);
        }}
      ></input>
    </div>
  );
};
export default Password;
 