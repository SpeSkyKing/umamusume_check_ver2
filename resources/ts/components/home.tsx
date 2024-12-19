import React,{useState} from 'react';
import {Sidebar} from './layout/sidebar';
import {CharacterRegist} from './container/characterRegist';
import {CharacterList} from './container/characterList';
import {RaceList} from './container/raceList';
import {RemainingRaceList} from './container/remainingRaceList';
import {LiveList} from './container/liveList';
import {ArtistList} from './container/artistList';

export const Home = () => {
    const [selectedContent, setSelectedContent] = useState("characterRegist");

    return (
        <div class="flex h-full">
            <div className="!w-4/5 bg-umamusume-back"><Content selectedContent={selectedContent}></Content></div>
            <div class="!w-1/5 bg-umamusume-side bg-cover"><Sidebar  onTabClick={setSelectedContent}></Sidebar></div>
        </div>
    );
};

const Content = ({ selectedContent }) => {
    switch(selectedContent){
        case 'characterRegist':
            return (
                <CharacterRegist></CharacterRegist>
            );
        break;
        case 'characterList':
            return (
                <CharacterList></CharacterList>
            );
        break;
        case 'raceList':
            return (
                <RaceList></RaceList>
            );
        break;
        case 'remainingRaceList':
            return (
                <RemainingRaceList></RemainingRaceList>
            );
        break;
        case 'LiveList':
            return (
                <LiveList></LiveList>
            );
        break;
        case 'artistList':
            return (
                <ArtistList></ArtistList>
            );
        break;
    }
  };
