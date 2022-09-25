//this file contains some shared functions that wil lbe used across various components

import dayjs from 'dayjs';

export function getWeek(weekOfYearProp = dayjs().week()) { 
    //var testWeekOfYearProp = 3 OR dayjs().week(); //n.b. this ranges from 0-52
    //const TestOfWeek = dayjs().week(testWeekOfYearProp); //Sat 15 Jan  when I test this on a Sept 24th 2022 (Sat)

    //n.b. here are some notes on the syntax of .day():
    //const day = dayjs().day(); is Today represented as an integer between 0-6 where Sunday is 0 & Saturday is 6....     
    //...so it gets a numeric number representing today's day of the week
    
    // dayjs used to explicitly require the following plugin, but not anymore
    // var weekOfYear = require('dayjs/plugin/weekOfYear')
    // dayjs.extend(weekOfYear)
    // reference: https://day.js.org/docs/en/plugin/week-of-year
    var hourIterator = -1;
    var hoursMatrix_24_7 = new Array(24).fill([]).map(() => {       
        hourIterator++;

        var hourRow = [];
        const MonOfWeek = dayjs().week(weekOfYearProp).day(1).hour(hourIterator).minute(0).second(0);
        const TueOfWeek = dayjs().week(weekOfYearProp).day(2).hour(hourIterator).minute(0).second(0);  
        const WedOfWeek = dayjs().week(weekOfYearProp).day(3).hour(hourIterator).minute(0).second(0); 
        const ThurOfWeek = dayjs().week(weekOfYearProp).day(4).hour(hourIterator).minute(0).second(0); 
        const FriOfWeek = dayjs().week(weekOfYearProp).day(5).hour(hourIterator).minute(0).second(0);  
        const SatOfWeek = dayjs().week(weekOfYearProp).day(6).hour(hourIterator).minute(0).second(0);  
        const SunOfWeek = dayjs().week(weekOfYearProp).day(7).hour(hourIterator).minute(0).second(0); 
        hourRow.push(MonOfWeek, TueOfWeek, WedOfWeek, ThurOfWeek, FriOfWeek, SatOfWeek, SunOfWeek);

        return (new Array(7).fill(null).map((elem, i) => {          
            return hourRow[i];
        })); 
    });
    
    return hoursMatrix_24_7;
}


//this function returns an array of days (where each day is a day of the calendar.)
export function getMonth(month = dayjs().month()) {//n.b. 0<= month argument <=11
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day(); //gets day of current week
    let currentMonthCount = 0 - firstDayOfMonth;   //todo-refactor currentMonthCount to currentDate

    const dateMatrix = new Array(5).fill([]).map(() => {//This is an array representing the calendar in rows (5 weeks) and columns (7 days). 5 rows because i'm showing 4.5~=5 weeks in a month (overlapping with previuos and next month a little).
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });       
    });  
    return dateMatrix;
}