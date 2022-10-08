import React from 'react';

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

export default function CategoryColors() {
    
    
    return (
        <div className="border p-2 flex flex-col">
            <span className={`border bg-pink-200 p-2`}>hi </span>
            {colors.map((col) => (
                <>
                <span className={`border bg-${col}-500 p-2 rounded-full`}>hi </span>
                    <br />
                </>
            ))}
        </div>
    )
}