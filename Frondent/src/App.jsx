import { Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import AddFeedback from "./Components/AddFeedback"

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Routes>
        <Route path='/home' element={<AddFeedback/>}/>
      </Routes> */}
    </div>
  )
}

export default App