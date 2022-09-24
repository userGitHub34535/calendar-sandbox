import React from 'react';
import Hour from './Hour.js';
import Util from '../util.js';

export default function Week( {week} ) {
    return (
        <div className="flex-1 grid grid-cols-7 grid-rows-24">
            {week.map((rowHour, i1) => ( 
                <React.Fragment>
                    {rowHour.map((hourOnDay, i2) => {
                        return <Hour hour={hourOnDay} colIdx={i1} rowIdx={i2} />;
                    })}
                </React.Fragment>
            ))}
        </div>
    )
}