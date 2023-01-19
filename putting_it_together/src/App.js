import PersonCard from './components/PersonCard.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={'John'} lastName={'Doe'} years={''} hairColor={'Red'}/>
      <PersonCard firstName={'Moe'} lastName={'Stooge'} years={''} hairColor={'Black'}/>
    </div>
  );
}

export default App;
