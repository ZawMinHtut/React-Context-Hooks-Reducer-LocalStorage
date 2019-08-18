import React, { useReducer } from 'react';
import uuid from 'uuid/v1';

export const GameReducer = (state, action) => {
    switch (action.type) {
        case "ADD_GAME":
            return [...state, {
                Name: action.Game.Name,
                Company: action.Game.Company,
                id: uuid()
            }]
            break;
        case "REMOVE_GAME":
            return state.filter(Game => Game.id !== action.id);
            break;
        default:
            return state;
            break;
    }
}