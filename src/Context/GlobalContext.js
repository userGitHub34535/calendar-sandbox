import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 8 //Number.MAX_VALUE, //placeholder - to be changed to something meaningful
    ,setMonthIndex: (index) => {}
    ,weekIndex: 38  //Number.MAX_VALUE, //placeholder - to be changed to something meaningful
    ,setWeekIndex: (index) => {}
    ,showTLForm: true
    ,setShowTLForm: () => {}
    ,savedTLs: []
    ,dispatchTLs: ({type, payload}) => {}
    ,calendarViewUISelectedTL: null
    ,setCalendarViewUISelectedTL : () => {}
})

export default GlobalContext;