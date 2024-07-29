import Home from './components/Home'
import Profile from './components/Profile'
import View from './components/View'
import { Routes, Route } from "react-router-dom"
function App() {
 

  return (
    <>
     <Routes>
     <Route path="/" element={ <Home/> } />
     <Route path="/Profile" element={ <Profile/> } />
     <Route path='/View' element={<View/>}/>
     </Routes>
   
    </>
  )
}

export default App
