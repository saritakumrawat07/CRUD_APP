import './App.css';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <header className="App-header">
       
       
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/all' element={<AllUsers/>}/>

        <Route path='/add' element={<AddUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>


       
       </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
