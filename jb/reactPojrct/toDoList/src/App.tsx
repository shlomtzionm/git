
import { HomePage } from './components/homePage/HomePage'
import { Layout } from './components/layout/Layout'
import { Provider } from 'react-redux'
import { store } from './store/store'
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
