import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setNickName } from "../featurers/useNameSlice";



export const HomePage = () => {
  const userName = useSelector((state:RootState) => state.userNickName);
  const dispatch = useDispatch();

  

  return (
    <>
    <div>{userName}</div>
    {/* <button onClick={}></button> */}
      <input
        type="text"
        onChange={(event)=>{dispatch(setNickName(event.target.value))}}
    ></input>
        
    </>
  );
};
