import './App.css'
import { store } from '../src/store/store'
import { Provider } from 'react-redux'
import { HomePage } from './components/homePage/HomePage'
import { Layout } from './components/layout/layout'

function App() {

  return (
    <>
   <Provider store={store}>
  <Layout>
    <HomePage/>
  </Layout>
   </Provider>
    </>
  )
}

export default App
