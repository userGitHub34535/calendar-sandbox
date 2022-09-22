import React, {useState} from 'react';
import './App.css';
import DateTimePicker from 'react-datetime-picker';
import TimePicker from 'react-time-picker';
import {getMonth} from './util.js';
import Sidebar from './Components/Sidebar';
import Month from './Components/Month';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  console.table(getMonth(3));
  
  return (
    <React.Fragment>

      <input type="time" />
      <DateTimePicker  autoFocus={true} format="MM-dd-y HH:mm" value={new Date(Date.now())}/>
      <DateTimePicker  autoFocus={true} format="MM-dd-y HH:mm" value={new Date(Date.now())}/>

    <div className="h-screen flex flex-columns">
      {/* <CalendarHeader /> */}
      <div className="flex flex-1">
        <Sidebar />
        <Month month={currentMonth} />
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
