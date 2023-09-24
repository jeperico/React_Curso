import NavBar from './components/Layout/NavBar';
import HelloWorld from './components/HelloWorld/HelloWorld';
import PersonData from './components/PersonData/PersonData';
import List from './components/List/List';
import EventClicker from './components/EventClicker/EventClicker';
import Form from './components/EventClicker/Form';
import Conditional from './components/Conditional/Conditional';
import Conditional2 from './components/Conditional/Conditional2';
import StateLift from './components/StateLift/StateLift';
import Footer from './components/Layout/Footer';

import Contate from './pages/Contate';
import Empresa from './pages/Empresa';
import Home from './pages/Home';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Router className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/empresa' element={<Empresa/>}></Route>
        <Route path='/contate' element={<Contate/>}></Route>
      </Routes>
      <HelloWorld />
      <PersonData foto='https://via.placeholder.com/200' nome='Josue' idade='12 anos' profissao='Carpinteiro' email='jorisvaldo@gmail.com' cpf='967.527.999-03' />
      <List />
      <EventClicker />
      <Form />
      <Conditional />
      <Conditional2 />
      <StateLift />
      <Footer />
    </Router>
    
  );
}

export default App;
