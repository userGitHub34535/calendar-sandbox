import React, {useState, useContext, useEffect} from 'react';
import './App.css';
import GlobalContext from './Context/GlobalContext';
import {getMonth, getWeek} from './util.js';
import CalendarHeader from './Components/CalendarHeader';
import Sidebar from './Components/Sidebar';
import Month from './Components/Month';
import Week from './Components/Week';
import TimeLaboredForm from './Components/TimeLaboredForm';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [currentWeek, setCurrentWeek] = useState(getWeek());
  const {monthIndex, weekIndex} = useContext(GlobalContext);
  
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex]) 
  
  useEffect(() => {
    setCurrentWeek(getWeek(weekIndex))
  }, [weekIndex])

  console.table(getWeek());  
  return (
    <React.Fragment>
    <TimeLaboredForm />
    <div className="h-screen flex flex-columns">
      <CalendarHeader />
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
