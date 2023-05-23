import Logos from './Logos';
import Count from './Count';
import './App.css';

function App() {
  return (
    <>
      <Logos />
      <h1>Vite + React</h1>
      <div className="card">
        <Count />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App;