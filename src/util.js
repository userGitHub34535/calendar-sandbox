//this file contains some shared functions that wil lbe used across various components

import dayjs from 'dayjs';

export function getWeek(/*weekOfYear = dayjs(new Date()).week()*/) {
    //weekOfYear //n.b. this ranges from 0-52
    //get today's date. You need to get the week it's in from Monday to Sunday.

    const day = dayjs(new Date()).day() //this is a day within 0-6 where Sunday is 0 & Saturday is 6.
    const MondayOfWeek = dayjs(new Date()).subtract(day-1, 'day'); //this is the first Monday of the week
    var dayIterator = MondayOfWeek.day()-1;
    var hourIterator = -1;

    var hoursMatrix_24_7 = new Array(24).fill([]).map(() => {       
        hourIterator++;
        return (
            new Array(7).fill(null).map(() => {                
                dayIterator++;
                return (
                    dayjs().day(dayIterator).hour(hourIterator).minute(0).second(0)
                    );
                })
        ); 
    });

    return hoursMatrix_24_7;
}


//this function returns an array of days (where each day is a day of the calendar.)
export function getMonth(month = dayjs().month()) {//n.b. 0<= month argument <=11
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day(); 
    let currentMonthCount = 0 - firstDayOfMonth;   //todo-refactor currentMonthCount to currentDate

    const dateMatrix = new Array(5).fill([]).map(() => {//This is an array representing the calendar in rows (5 weeks) and columns (7 days). 5 rows because i'm showing 4.5~=5 weeks in a month (overlapping with previuos and next month a little).
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });       
    });  
    return dateMatrix;
}