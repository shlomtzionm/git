
import { Provider } from 'react-redux'
import { HomePage } from './components/HomePage'
import { TopBar } from './components/TopBar'
import { store } from './store'


function App() {


  return (
    <>
    <Provider store={store}>
    <TopBar/>
   <HomePage/>
   </Provider>
    </>
  )
}

export default App
