
import './App.css'
// import {NavbarMenu} from './lading-page'
// import {Cards}  from './cards'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter} from 'react-router-dom'


function App() {
 

  return (
    <>
      <BrowserRouter>
      
        <AppRouter/>

      </BrowserRouter>
     {/* <NavbarMenu/>
     <Cards/>   */}
    </>
  )
}

export default App


