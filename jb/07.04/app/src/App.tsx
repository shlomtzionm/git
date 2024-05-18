import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./App.css";
import counterReducer from "./features/counter/counterSlice";
import Counter from "./components/counter";



const store = configureStore({
  reducer:{
    counter: counterReducer
  }
})
function App() {

  return (
    <>
    <Provider store={store}>
      <Counter/>
    </Provider>
    </>
  );
}

export default App;
