import React from 'react';

export default function Hour({hour, colIdx, rowIdx}) {
    return (
        <div className="border border-gray-200 flex flex-col">
            {colIdx ===0 && (
                <p>
                    {hour.format("ddd").toUpperCase()}
                </p>
            )}
            {rowIdx === 0 && (
                <p className="text-sm">
                    {hour.format("HH:mm:ss")}
                </p>
                )
            }
            <p className="text-sm p-1 my-1 text-center">
                {/* timeLaboreds go here */}
            </p>   
        </div>
    );
}