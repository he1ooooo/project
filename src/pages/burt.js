import "../scss/login.scss";
import Logo from "../components/logo";
import Password from "../components/pass";
import Password1 from "../components/pass1";
import Gmail from "../components/gmail";
import { useContext } from "react";
import { useFirebase } from "../hooks./firebase";
import { NevtrehContext, NevtrehContextPorvider } from "../constext/nevtreh";
const Sign = () => {
  const { setloginInput, setpassword, setcheck, check, password, loginInput } =
    useContext(NevtrehContext);
  const { auth } = useFirebase();
  const signin = async () => {
    if (password !== check) {
      alert("Password");
    } else {
      let users = await auth.createUserWithEmailAndPassword(
        loginInput,
        password
      );
      console.log(users);
    }
  };
  return (
    <div className="column center space">
      <Logo />
      <div className="bgcg">Бүртгүүлэх</div>
      <Gmail func={setloginInput} />
      <Password funcp={setpassword} />
      <Password1 checkp={setcheck} />
      <button className="bgcgw" onClick={signin}>
        Бүртгүүлэх
      </button>
    </div>
  );
};
export default Sign;
