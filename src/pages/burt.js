import "../scss/login.scss"
import Logo from "../components/logo"
import Nmaig from "../components/nmaig"
import Password from "../components/pass"
import Gmail from "../components/gmail"
import New from "../components/new"
const Login = () => {
    return (
        <div className="column center space">
            <Logo/>
            <div className="bgcg">Нэвтрэх</div>
            <Gmail/>
            <Password/>
            <Nmaig/>
            <div className="bgcgw">Нэвтрэх</div>
            <New/>  
        </div>
    )
}
export default Login;