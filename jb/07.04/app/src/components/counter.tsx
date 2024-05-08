import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
import { RootState } from "@reduxjs/toolkit/query";

export default function Counter(){
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return(<>
<div>
    <div onClick={()=> dispatch(increment())}>+</div>
    <div>{count}</div>
    <div onClick={()=> dispatch(decrement())}>-</div>
    </div>    
    </>)
}