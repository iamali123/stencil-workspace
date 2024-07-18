import './App.css';
import { MyComponent, defineCustomElements } from 'react-library';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <MyComponent first="Your" last="ali" />
    </div>
  );
}

export default App;