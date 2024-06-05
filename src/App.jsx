import 'bootstrap/dist/css/bootstrap.min.css'
import View from './pages/View'
import Add from './pages/Add'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View/>}/>
        <Route path="/Add" element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
