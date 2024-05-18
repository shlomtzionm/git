
import { Provider } from 'react-redux'
import './App.css'
import { HomePage } from './components/HomePage'
import { store } from './store'

function App() {


  return (
    <>
    <Provider store={store}>
    <HomePage></HomePage>
</Provider>
    </>
  )
}

export default App
