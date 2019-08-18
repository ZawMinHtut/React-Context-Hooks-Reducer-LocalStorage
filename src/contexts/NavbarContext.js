import React, { createContext, Component } from 'react';

export const NavbarContext = createContext();

export default class NavbarContextProvider extends Component {
    constructor(){
        super();
        this.state={
            MenuList: ['Log Out', 'Change Theme']
        }
    }
    render(){
        return(
            <NavbarContext.Provider value={{...this.state}}>
                {this.props.children}
            </NavbarContext.Provider>
        );
    }
}