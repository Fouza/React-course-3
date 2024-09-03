import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import BigComp from './components/BigComp/BigComp';
import Form from './components/Form/Form';

function App() {

  const x = 10
  const y = 20

  const person = {
    firstName: 'Fouzi',
    lastName: 'Oukacha'
  }

  const { firstName, lastName } = person

  return (
    <div className="App">
      {/* <BigComp title="Big Component" /> */}
      {/* Ctrl + space */}
      <Form />
    </div>
  );
}

export default App;
