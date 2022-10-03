import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 8 //Number.MAX_VALUE, //placeholder - to be changed to something meaningful
    ,setMonthIndex: (index) => {}
    ,weekIndex: 38  //Number.MAX_VALUE, //placeholder - to be changed to something meaningful
    ,setWeekIndex: (index) => {}
    ,showTLForm: false
    ,setShowTLForm: () => {}
    ,dispatchTLs: ({type, payload}) => {}
    ,savedTLs: []
    ,calendarViewUISelectedTL: null
    ,setCalendarViewUISelectedTL : () => {}
})

export default GlobalContext;