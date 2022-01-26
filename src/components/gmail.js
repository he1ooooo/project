import "../scss/login.scss"
const Gmail = (func)=>{
    return( 
        <div> 
        <div className="tsahimhayg fontn" ></div>
        <input className="saaral"  placeholder="name@mail.domain" onChange={(event) => func(event.target.value)}></input>
        </div>
    )
}
export default Gmail;