import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 8, //Number.MAX_VALUE, //placeholder - to be changed to something meaningful
    setMonthIndex: (index) => {}
})

export default GlobalContext;