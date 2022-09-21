//this file contains some shared functions that wil lbe used across various components

import dayjs from 'dayjs';

//this function returns an array of days (where each day is a day of the calendar.)
export function getMonth(month = dayjs().month()) {
//n.b. 0<= month argument <=11

    const year = dayjs().year();
    const firstDateOfMonth = dayjs(new Date(year, month, 1)).day(); 
    let currentMonthCount = 0 - firstDateOfMonth;   //todo-refactor currentMonthCount to currentDate

    const dateMatrix = new Array(5).fill([]).map(() => {//This is an array representing the calendar in rows (5 weeks) and columns (7 days). 5 rows because i'm showing 4.5~=5 weeks in a month (overlapping with previuos and next month a little).
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });       
    });  
    return dateMatrix;
}