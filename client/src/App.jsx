import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import PersonData from './components/PersonData/PersonData';
import List from './components/List/List';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <PersonData foto='https://via.placeholder.com/200' nome='Josue' idade='12 anos' profissao='Carpinteiro' email='jorisvaldo@gmail.com' cpf='967.527.999-03' />
      <List />
    </div>
  );
}

export default App;
