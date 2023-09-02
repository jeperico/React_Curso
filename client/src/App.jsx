import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import PersonData from './components/PersonData/PersonData';
import List from './components/List/List';
import EventClicker from './components/EventClicker/EventClicker';
import Form from './components/EventClicker/Form';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <PersonData foto='https://via.placeholder.com/200' nome='Josue' idade='12 anos' profissao='Carpinteiro' email='jorisvaldo@gmail.com' cpf='967.527.999-03' />
      <List />

      <EventClicker />
      <Form />
    </div>
  );
}

export default App;
