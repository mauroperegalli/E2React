
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Context } from './context/Context';
import {Routes} from './routes/Routes'


function App() {

  
  return (
      <>

        <BrowserRouter>
          <Context>
            <Navbar/>
            <Routes></Routes>
          </Context>
        </BrowserRouter>
      </>
  );
}

export default App;
