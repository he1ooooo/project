import { useContext } from "react";
import Logo from "../components/logo";
import { NevtrehContext } from "../constext/nevtreh";
import Boginoo from "../components/boginoo";
import "../scss/login.scss";
import { Link } from "react-router-dom";
const Default = () => {
  const { setboginoo } = useContext(NevtrehContext);
  return (
    <div className="center column">
      <Logo />
      <div className="rows">
        <Boginoo boginsgoh={setboginoo} />
        <Link to="/bogins" style={{
            
        }}>
          <button className="wbgcgw">Богиносгох</button>
        </Link>
      </div>
    </div>
  );
};
export default Default;
