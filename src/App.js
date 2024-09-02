import logo from './logo.svg';
import './App.css';
import Input from './components/Input';

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
      <Input initialValue={x} firstName={firstName} />
    </div>
  );
}

export default App;
