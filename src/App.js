import logo from './logo.svg';
import './App.css';
import DateTimePicker from 'react-datetime-picker';
import TimePicker from 'react-time-picker';

function App() {
  return (
    <div className="App">
      <input type="time" />
      <DateTimePicker  autoFocus={true} format="MM-dd-y HH:mm" value={new Date(Date.now())}/>
      <DateTimePicker  autoFocus={true} format="MM-dd-y HH:mm" value={new Date(Date.now())}/>
    </div>
  );
}

export default App;
