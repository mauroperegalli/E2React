
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { GeneralWrapper } from './components/GeneralWrapper';
import { Navbar } from './components/Navbar';
import { TodoList } from './pages/TodoList';
import {Routes} from './routes/Routes'


function App() {

  
  return (
      <>

        <BrowserRouter>
          <Navbar/>
          <Routes></Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
