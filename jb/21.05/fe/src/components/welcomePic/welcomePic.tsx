import pic from "../../background-dog-2.jpg"
import "./welcomePic.css"
export const WelcomePic = ()=>{
    return(<>
    <img src={pic} className="pic"></img>
    <p className="text">everyone need a home</p>
    <p className="secondText"> we also have cats</p>
    </>)
}  