import { useContext } from "react";
import Logo from "../components/logo";
import { NevtrehContext } from "../constext/nevtreh";
import "../scss/login.scss";
const Boginoo= ({ boginsgoh }) => {
  const { boginoo } = useContext(NevtrehContext);
  return (
    <div className="center column">
      <input
        className="wsaaral"
        placeholder="https://www.web-huudas.mn"
        onChange={(el) => {
          boginsgoh(el.target.value);
        }}
      ></input>
    </div>
  );
};
export default Boginoo;