import React, {useState} from 'react';
import dayjs from 'dayjs';
import GlobalContext from './GlobalContext';

export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());

    var weekOfYear = require('dayjs/plugin/weekOfYear')
    dayjs.extend(weekOfYear)
    const [weekIndex, setWeekIndex] = useState(dayjs().week()); /*, weekIndex, setWeekIndex}}>*/
    return (
    <GlobalContext.Provider value={{monthIndex, setMonthIndex}}>
        {props.children}
    </GlobalContext.Provider>
  )
}
