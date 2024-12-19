import React,{useState} from 'react';
import {SidebarTab} from './sidebarTab';
export const Sidebar = (props) => {
    const [components, setItems] = useState([
        { id: 1, name: 'ウマ娘情報登録', url:'characterRegist'},
        { id: 2, name: 'ウマ娘情報表示', url:'characterList'},
        { id: 3, name: 'レース情報表示', url:'raceList'},
        { id: 4, name: '残レース情報表示', url:'remainingRaceList'},
        { id: 5, name: 'ライブ情報表示', url:'LiveList'},
        { id: 6, name: '声優情報表示', url:'artistList'}
    ]);

    return (
        <div class="min-h-full">
            <ul>
                {components.map((component) => (
                    <SidebarTab name={component.name} onClick={() => props.onTabClick(component.url)}></SidebarTab>
                ))}
            </ul>
        </div>
    );
};
