import React, { useContext } from 'react';
import { GameContext } from '../contexts';

export const GameDetails = ({Game}) => {
    const { dispatch } = useContext(GameContext);
    return(
        <li onClick={() => dispatch({type: "REMOVE_GAME", id: Game.id})}>
            <div className="name">
                {Game.Name}
            </div>
            <div className="company">
                {Game.Company}
            </div>
        </li>
    );
}