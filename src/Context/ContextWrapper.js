import React, {useState, useEffect, useReducer} from 'react';
import dayjs from 'dayjs';
import GlobalContext from './GlobalContext';

function savedTLReducer(state, {type, payload}) {
  switch (type) {
    case 'push':  //HTTP GET i.e. create a new TL
      return [...state, payload];
    case 'update':
      return state.map(e => e.id === payload.id ? payload : e);
    case 'delete':
      return state.filter(e => e.id != payload.id);  
    default:
      throw new Error();
  }
}

function initSavedTLs() {
  const storageTLs = localStorage.getItem('savedTLs')
  const parsedTLs = storageTLs ? JSON.parse(storageTLs) : [];
  return parsedTLs;
}

export default function ContextWrapper(props) {
    const [showTLForm, setShowTLForm] = useState(false);
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [savedTLs, dispatchTLs] = useReducer(savedTLReducer, [], initSavedTLs);
    const [calendarViewUISelectedTL, setCalendarViewUISelectedTL] = useState(null);
    
  useEffect(() => {
    localStorage.setItem("savedTLs", JSON.stringify(savedTLs));  //everytime savedTLs gets updated, we save it to storage
  }, [savedTLs])

  useEffect(() => {
    if(!showTLForm) {
      setCalendarViewUISelectedTL(null);
    }
  }, [showTLForm]);

    //require this plugin to use .week() here below
    var weekOfYear = require('dayjs/plugin/weekOfYear')
    dayjs.extend(weekOfYear)
    const [weekIndex, setWeekIndex] = useState(dayjs().week());
    
    return (
    <GlobalContext.Provider value={
      {showTLForm
        ,setShowTLForm
        ,monthIndex
        ,setMonthIndex
        ,weekIndex
        ,setWeekIndex
        ,dispatchTLs
        ,calendarViewUISelectedTL
        ,setCalendarViewUISelectedTL
        ,savedTLs }}>
        {props.children}
    </GlobalContext.Provider>
  )
}
