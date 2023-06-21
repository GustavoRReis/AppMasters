import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import APIProvider from './context/APIProvider';

function App() {


  return (
    <BrowserRouter>
      <APIProvider>
        <Routes>
          <Route path='/' element={ <Home /> } />

        </Routes>
      </APIProvider>

    </BrowserRouter>
  )
}

export default App
