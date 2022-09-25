import React, {useContext} from "react";
import GlobalContext from "../Context/GlobalContext";

export default function Header() {
    const {monthIndex, setMonthIndex, weekIndex, setWeekIndex} = useContext(GlobalContext);
    
    function handlePrev() {
        handlePrevMonth();
        handlePrevWeek();
    }
    function handleNext() {
        handleNextMonth();
        handleNextWeek();
    }

    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1);
    }
    function handlePrevWeek() {
        setWeekIndex(weekIndex - 1);
    }
    function handleNextMonth() {
        setMonthIndex(monthIndex + 1);
    }
    function handleNextWeek() {
        setWeekIndex(weekIndex + 1);
    }

    return (
        <header>
            <h1 className="mr-10 text-xl text-gray-500 font-bold">
                Clock My Day
            </h1>
            <button onClick={handlePrev}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                    {`<`}
                </span>
            </button>
            <button onClick={handleNext}>
                <span className="cursor-pointer mx-2">
                    {`>`}
                </span>
            </button>
        </header>
    )
}