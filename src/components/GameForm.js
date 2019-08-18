import React, { useContext, useState } from 'react';
import { GameContext } from '../contexts';

export const GameForm = () => {
    const { dispatch } = useContext(GameContext); 
    const [ Name, setName ] = useState('');
    const [ Company, setCompany ] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_GAME", Game: {
            Name,
            Company
        }});
        setName('');
        setCompany('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" placeholder="Game Name" value={Name} onChange={(e)=>{setName(e.target.value)}} required/>
            </div>

            <div className="form-group">
                <input type="text" placeholder="Developed By" value={Company} onChange={(e)=>{setCompany(e.target.value)}} required/>
            </div>

            <div className="form-group">
                <input type="submit" value="Add Game"/>
            </div>
        </form>
    );
}