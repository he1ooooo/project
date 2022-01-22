import "../scss/login.scss"
import huv from "../zurag.png"
import Gmail from "../components/gmail"
const Login = () => {
    return (
        <div className="center space">
        <div className="column ">
            <div className="Boginoo cen">
            <img src={huv} />
                <div className="font">Boginoo</div>
            </div>
            <div className="bgcg">Нэвтрэх</div>

            <Gmail>Цахим хаяг</Gmail>

            <input className="saaral"></input>

            <label className="nuutsug fontn">Нууц үг</label   >

            <input className="saaral"></input>

            <div className="bgcgw">Нэвтрэх</div>
        </div>
        </div>
    )
}
export default Login;