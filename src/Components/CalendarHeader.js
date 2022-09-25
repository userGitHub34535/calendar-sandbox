import React, {useContext} from "react";
import GlobalContext from "../Context/GlobalContext";

export default function Header() {
    const {monthIndex, setMonthIndex, weekIndex, setWeekIndex} = useContext(GlobalContext);
    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1);
    }
    function handleNextMonth() {
        setMonthIndex(monthIndex + 1);
    }
    function handlePrevWeek() {
        setMonthIndex(weekIndex - 1);
    }
    function handleNextWeek() {
        setMonthIndex(weekIndex + 1);
    }
    return (
        <header>
            <h1 className="mr-10 text-xl text-gray-500 font-bold">
                Clock My Day
            </h1>
            <button onClick={() => {
                this.handlePrevMonth(); 
                this.handlePrevWeek();
                }}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                    {`<`}
                </span>
            </button>
            <button onClick={() => {
                this.handleNextMonth(); 
                this.handleNextWeek();
                }}>
                <span className="cursor-pointer mx-2">
                    {`>`}
                </span>
            </button>
        </header>
    )
}