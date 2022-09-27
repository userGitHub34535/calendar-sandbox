//the EventModal.js

import React, {useState} from 'react';
import DateTimePicker from 'react-datetime-picker';
import DateTimeInput from 'react-datetime-picker';
import TimePicker from 'react-time-picker';

export default function TimeLaboredForm() {
    const [description, setDescription] = useState('');
    const [value, onChange] = useState(new Date());

    function handleEndTime(e) {
        console.log(e.value);
        alert(e.value);
        alert(e);
    }

    return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
        <form className="bg-white rounded-lg shadow-2xl w-1/4">
            <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                <span className="material-icons-outlined text-gray-400">
                    drag_handle
                </span>
                <button>
                <span className="material-icons-outlined text-gray-400">
                    close
                </span>
                </button>
            </header>
            <div className="p-3 ">
                <div className="grid grid-cols-1/5 items-end gap-y-7">
                    {/* <div></div> */}
                    <DateTimeInput  autoFocus={true} format="HH:mm MM-dd-yyy" value={new Date(Date.now())}/>
                    <DateTimePicker  autoFocus={true} format="HH:mm MM-dd-yyyy" onChange={onChange} onFocus={handleEndTime} value={value} disableClock={true} />
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="Add description" 
                        value={description} 
                        required
                        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
            </div>
        </form>
    </div>
  )
}
