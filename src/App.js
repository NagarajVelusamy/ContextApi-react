import './App.css';
import About from './component/About';
import User from './component/User';
import { UseContextrProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UseContextrProvider>
        <User />
        <About />
      </UseContextrProvider>
    </div>
  );
}

export default App;
