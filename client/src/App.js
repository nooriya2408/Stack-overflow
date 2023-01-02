import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar'
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import './App.css';
import Allroutes from './Allroutes'

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch]) 
  return (
    <div className="App">
      
      <Router >
      <Navbar />
      
            <Allroutes />     
      </Router >
     
    </div>
  );
}

export default App;
