import React, {useState} from 'react';
import dayjs from 'dayjs';
import GlobalContext from './GlobalContext';

export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());

    //require this plugin to use .week() here below
    var weekOfYear = require('dayjs/plugin/weekOfYear')
    dayjs.extend(weekOfYear)
    const [weekIndex, setWeekIndex] = useState(dayjs().week());
    
    return (
    <GlobalContext.Provider value={{monthIndex, setMonthIndex, weekIndex, setWeekIndex}}>
        {props.children}
    </GlobalContext.Provider>
  )
}
