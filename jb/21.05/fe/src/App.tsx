
import { Provider } from 'react-redux'
import { HomePage } from './components/homePage/HomePage'
import { TopBar } from './components/topBar/TopBar'
import { store } from './store'
import "../src/app.css"
import { Footer } from './components/footer/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {


  return (
    <>
    <Provider store={store}>
    <ParallaxProvider>
      <div className='appContainer'>
    <TopBar/>
   <HomePage/>
   <Footer/>
   </div>
   </ParallaxProvider>
   </Provider>
    </>
  )
}

export default App
