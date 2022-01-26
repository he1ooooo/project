import "../scss/login.scss";
import Logo from "../components/logo";
import Nmaig from "../components/nmaig";
import Password from "../components/pass";
import Gmail from "../components/gmail";
import New from "../components/new";
import { useFirebase } from "../hooks./firebase";
const Login = () => {
  const { auth } = useFirebase();

  const login = async () => {
      let user = await auth.createUserWithEmailAndPassword('test@gmail.com', '1234567')
      console.log(user)
  }
  return (
    <div className="column center space">
      <Logo />
      <div className="bgcg">Нэвтрэх</div>
      <Gmail />
      <Password />
      <Nmaig />
      <div onClick={login} className="bgcgw">Нэвтрэх</div>
      <New />
    </div>
  );
};
export default Login;
