import React,{useState} from 'react';
interface tabName{
    item : string;
}
export const SidebarTab = ({name,onClick}) => {
    return (
        <li class="block w-full text-center text-2xl font-bold py-4 rounded-xl border-2 border-gray-300 bg-transparent text-purple-500 transition-all duration-300 hover:bg-pink-200 hover:text-white hover:scale-105 hover:shadow-lg active:bg-pink-300 mb-4">
            <a onClick={onClick}>
                {name}
            </a>
        </li>
    );
};
