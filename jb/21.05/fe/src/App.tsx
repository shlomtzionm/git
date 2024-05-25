
import { Provider } from 'react-redux'
import { HomePage } from './components/homePage/HomePage'
import { TopBar } from './components/topBar/TopBar'
import { store } from './store'
import "../src/app.css"
import { Footer } from './components/footer/Footer'

function App() {


  return (
    <>
    <Provider store={store}>
    <TopBar/>
   <HomePage/>
   <Footer/>
   </Provider>
    </>
  )
}

export default App
