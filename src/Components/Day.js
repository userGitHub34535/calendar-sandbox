import dayjs from 'dayjs';
import React, {useContext} from 'react';
import GlobalContext from '../Context/GlobalContext';

export default function Day({day/*, rowIdx*/}) {
  
    function getCurrentDayClass() {
        return ( 
            day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") 
            ? 'bg-blue-600 text-white rounded-full w-7'
            : '' );
    }

    const {savedTLs} = useContext(GlobalContext);
  
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
            {savedTLs.map((TL) => (
                <div className={`bg-red-500`}>
                    {TL.description}
                </div>
            ))}
        </body>
    </div>
  );
}
