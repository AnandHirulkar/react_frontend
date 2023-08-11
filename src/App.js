import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddEmpl from './employees/AddEmpl';
import EditEmpl from './employees/EditEmpl';
import ViewEmpl from './employees/ViewEmpl';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/addEmpl" element={<AddEmpl/>}></Route>
          <Route exact path="/editEmpl/:id" element={<EditEmpl/>}></Route>
          <Route exact path="/viewEmpl/:id" element={<ViewEmpl />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
