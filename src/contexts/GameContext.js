import React, { createContext, useReducer, useEffect } from 'react';
import { GameReducer } from '../reducers';

export const GameContext = createContext();

export const GameContextProvider = (props) => {
    const [Games, dispatch] = useReducer(GameReducer,[], ()=>{
        const localData = localStorage.getItem("Games");
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem("Games", JSON.stringify(Games));
    }, [Games])
    return(
        <GameContext.Provider value={{Games, dispatch}}>
            { props.children }
        </GameContext.Provider>
    );
}
