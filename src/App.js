import React, {useState} from 'react';
import './App.css';
import DateTimePicker from 'react-datetime-picker';
import TimePicker from 'react-time-picker';
import {getMonth, getWeek} from './util.js';
import Sidebar from './Components/Sidebar';
import Month from './Components/Month';
import Week from './Components/Week';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [currentWeek] = useState(getWeek());
  console.table(getMonth(3));
  console.table(getWeek());  
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
        <Week week={currentWeek} />
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
