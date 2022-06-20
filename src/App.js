import './App.css';
import Person from './components/person';

function App() {
  return (
    <div className="App">
      <Person
      firstName={'Jane'}
      lastName={'Doe'}
      age={45}
      hairColor={'Black'}
      />
      <Person
      firstName={'Smith'}
      lastName={'John'}
      age={88}
      hairColor={'Brown'}
      />
      <Person 
      firstName={'Millard'}
      lastName={'Fillmore'}
      age={50}
      hairColor={'Brown'}
      />
      <Person 
      firstName={'Maria'}
      lastName={'Smith'}
      age={62}
      hairColor={'Brown'}
      />
    </div>
  );
}

export default App;
