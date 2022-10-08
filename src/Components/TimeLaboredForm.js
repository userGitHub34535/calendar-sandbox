//the EventModal.js
import dayjs from 'dayjs';
import React, {useState, useContext} from 'react';
import DateTimePicker from 'react-datetime-picker';
import DateTimeInput from 'react-datetime-picker';
import TimePicker from 'react-time-picker';
import GlobalContext from '../Context/GlobalContext';

const colors = [
    "red"
    ,"orange"
    ,"yellow"
    ,"green"
    ,"blue"
    ,"indigo"
    ,"purple"
    ,"gray"
];

export default function TimeLaboredForm() {
    const {
        dispatchTLs
        ,setShowTLForm
        ,calendarViewUISelectedTL
        ,setCalendarViewUISelectedTL
    } = useContext(GlobalContext);

    const [description, setDescription] = useState(
                                            calendarViewUISelectedTL 
                                            ? calendarViewUISelectedTL.description 
                                            : " ");
    const [startTime, setStartTime] = useState(
                                            calendarViewUISelectedTL 
                                            ? calendarViewUISelectedTL.startTime 
                                            : new Date());
    const [endTime, setEndTime] = useState(
                                            calendarViewUISelectedTL 
                                            ? calendarViewUISelectedTL.endTime 
                                            : new Date());
    const [colorSelected, setColorSelected] = useState(
                                            calendarViewUISelectedTL 
                                            ? calendarViewUISelectedTL.colorSelected 
                                            : colors[2]); 

    function handleSubmit(e) {
        e.preventDefault(); //prevent page from reloading
        const calendarTL = {
            startTime  //I think it's a great idea to save DateTimes to the DB as ISO 8601 (UTC) times, and then convert them to the locale time at the point of displaying them in the UI
            ,endTime
            ,description 
            ,colorSelected
            ,id: calendarViewUISelectedTL ? calendarViewUISelectedTL.id : Date.now()
        }
        if(calendarViewUISelectedTL) {
            dispatchTLs({type: 'update', payload: calendarTL})
        } else {
            dispatchTLs({type: 'push', payload: calendarTL}) 
        }
        setShowTLForm(false);
    }

    return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
        <form className="bg-white rounded-lg shadow-2xl w-1/4">
            <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                <span className="material-icons-outlined text-gray-400">
                    drag_handle
                </span>
                <div>
                    {calendarViewUISelectedTL && (
                        <button onClick={() => {
                            dispatchTLs({type: "delete", payload: calendarViewUISelectedTL});
                            setShowTLForm(false);
                        }}>
                        delete
                        </button>
                    )}
                    <button onClick={() => setShowTLForm(false)}>
                        <span className="material-icons-outlined text-gray-400">
                            close
                        </span>
                    </button>    
                </div>
            </header>
            <div className="p-3 ">
                <div className="grid grid-cols-1/5 items-end gap-y-7">
                    {/* <div></div> */}
                    <DateTimeInput  autoFocus={true} format="HH:mm MM-dd-yyy" value={startTime} onChange={setStartTime} disableClock={true} />
                    <DateTimePicker format="HH:mm MM-dd-yyyy" value={endTime} onChange={setEndTime}  disableClock={true} />
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="Add description" 
                        value={description} 
                        required
                        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                        onChange={(e) => setDescription(e.target.value)} />
                    <span>
                        colors
                    </span>
                    <div className="flex gap-x-2">
                        {colors.map((col, i) => (
                            <span 
                                key={i}  
                                className={`border bg-${col}-500 w-6 h-6 rounded-full flex items-center justify-center`}
                                onClick={() => setColorSelected(col)}>
                                {colorSelected === col && <span >=</span>}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <footer className="flex justify-end border-t p-3 mt-5">
                <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                    onClick={handleSubmit}>
                    Save
                </button>
            </footer>
        </form>
    </div>
  )
}
