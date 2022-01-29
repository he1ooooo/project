import "../scss/login.scss";
import Logo from "../components/logo";
import Nmaig from "../components/nmaig";
import Password from "../components/pass";
import Gmail from "../components/gmail";
import New from "../components/new";
import { useFirebase } from "../hooks./firebase";
import { useContext } from "react";
import { NevtrehContext } from "../constext/nevtreh";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { auth } = useFirebase();
  const { setpassword, setloginInput, loginInput, password, check } =
    useContext(NevtrehContext);

  const login = async () => {
    try {
      let user = await auth.signInWithEmailAndPassword(loginInput, password);
      navigate('/')
      console.log(user);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="column center space">
      <Logo />
      <div className="bgcg">Нэвтрэх</div>
      <Gmail func={setloginInput} />
      <Password funcp={setpassword} />
      <Nmaig />
      <button onClick={login} className="bgcgw">
        Нэвтрэх
      </button>
      <New />
    </div>
  );
};
export default Login;
