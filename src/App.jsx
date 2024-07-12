
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
