import React from 'react';
import CreateTimeLaboredBtn from './CreateTimeLaboredBtn';
import CategoryColors from './CategoryColors';

export default function Sidebar() {
    return (
        <aside className="border p-5 w-64">
            <CreateTimeLaboredBtn />
            <CategoryColors />
        </aside>
    )
}