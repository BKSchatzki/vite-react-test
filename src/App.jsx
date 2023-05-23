import Logos from './Logos';
import Count from './Count';
import DayOfWeek from './DayOfWeek';
import './App.css';

function App() {
  return (
    <>
      <DayOfWeek />
      <Logos />
      <h1>Vite + React</h1>
      <div className="card">
        <Count />
        <p>Save <code>App.jsx</code> to test HMR</p>
      </div>
    </>
  )
}

export default App;