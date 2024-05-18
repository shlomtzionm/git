
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { decrement, increment } from "../../featurs/counterSlice";

export const Counters = () => {
  const counters = useSelector((state: RootState) => state.counter.counters);
  const dispatch = useDispatch();


  return (
    <>
  {
    counters.map((counter)=>{
      return (
        <>
        <div key={counter.counterName}>
        <h4>{counter.counterName}</h4>
        <button onClick={()=>dispatch(increment(counter.counterName))}>+</button>
        <h3>{counter.count}</h3>
        <button onClick={()=>dispatch(decrement(counter.counterName))}>-</button>
        </div>
        </>
      )
    })
  }

      
    
    </>
  )
};
