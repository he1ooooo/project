import { useContext } from "react";
import { NevtrehContext } from "../constext/nevtreh";
import "../scss/login.scss";
const Gmail = ({ func }) => {
  const { loginInput } = useContext(NevtrehContext);
  return (
    <div>
      Цахим хаяг
      <div className="tsahimhayg fontn"></div>
      <input
        className="saaral"
        placeholder="name@mail.domain"
        onChange={(event) => {
          func(event.target.value);
        }}
      ></input>
    </div>
  );
};
export default Gmail;
