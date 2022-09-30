import dayjs from 'dayjs';
import React, {useState, useEffect, useContext} from 'react';
import GlobalContext from '../Context/GlobalContext';

export default function Day({day/*, rowIdx*/}) {
  
    const [dayTLs, setDayTLs] = useState([]);
    const {savedTLs} = useContext(GlobalContext);

    useEffect(() => {
        const relevantTLs = savedTLs.filter((tl) => dayjs(tl.startTime).format("DD-MM-YY") === day.format("DD-MM-YY"));
        setDayTLs(relevantTLs);
    }, [savedTLs, day]);

    function getCurrentDayClass() {
        return ( 
            day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") 
            ? 'bg-blue-600 text-white rounded-full w-7'
            : '' );
    }

   
  
    return (
    <div className="border border-gray-200 flex flex-col">
        <header className="flex flex-col items-center">
            {/*rowIdx === 0 && (*/
                <p className="text-sm mt-1">
                    {day.format("ddd").toUpperCase()}
                </p>
            }            
            <p className= {`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                {day.format("DD")}
            </p>    
        </header>
        <body>
            {dayTLs.map((tl, idx) => ( //${tl.colorSelected}
                <div key = {idx} className={`bg-red-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}>
                    {tl.description}
                </div>
            ))}
        </body>
    </div>
  );
}
