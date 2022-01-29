import "../scss/login.scss";
import { Link } from "react-router-dom";
const New = () => {
  return (
    <Link
      to="/sign"
      style={{
        textDecoration: "none", 
      }}
    >
      <div className="greeen">Шинэ хэрэглэгч бол энд дарна уу?</div>
    </Link>
  );
};
export default New;
