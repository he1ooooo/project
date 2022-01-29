import "../scss/login.scss";
import Boginoo from "../components/boginoo";
import Logo from "../components/logo";
import { Link } from "react-router-dom";
import Ugsun from "../components/ugugdsun";
const Bogins = () => {
  return (
    <div className="center column">
      <Logo />
      <div className="rows">
        <Boginoo />
        <Link to="/bogins" style={{}}>
          <button className="wbgcgw">Богиносгох</button>
        </Link>
      </div>
      <Ugsun/>
    </div>
  );
};
export default Bogins;
