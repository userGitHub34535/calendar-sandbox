import React from "react";

export default function Header() {
    return (
        <header>
            <h1 className="mr-10 text-xl text-gray-500 font-bold">
                Clock My Day
            </h1>
            <button>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                    {`<`}
                </span>
            </button>
            <button>
                <span className="cursor-pointer mx-2">
                    {`>`}
                </span>
            </button>
        </header>
    )
}