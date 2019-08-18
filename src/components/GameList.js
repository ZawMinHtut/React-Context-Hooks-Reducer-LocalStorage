import React, { useContext } from 'react';
import { GameContext } from '../contexts';
import { GameDetails } from './GameDetails';

export const GameList = () => {
    const { Games } = useContext(GameContext);
    return Games.length ? (
        <div className="game-list">
            <p>There're {Games.length} games to play. Happy Play Time xD</p>
            <ul>{
                Games.map(Game => <GameDetails Game={Game} key={Game.id} />)
            }</ul>
        </div>
    ) : (
        <div className="game-list">
            <p>There's no game to play! What A Sad Life T_T.....</p>
        </div>
    );
}