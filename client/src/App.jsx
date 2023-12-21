import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Home, Process, Documents, Fees, Handbook, About} from './pages'
import { Header} from './components'

function App() {

  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/about' element={ <About/> } />
          <Route path='/process' element={ <Process/> } />
          <Route path='/documents' element={ <Documents/> } />
          <Route path='/fees' element={ <Fees/> } />
          <Route path='/handbook' element={ <Handbook/> } />
        </Routes>
      </BrowserRouter> 
  )
}

export default App
